const fs = require('fs')
const projects = require('../../projectsMock.json')
exports.post = (req, res, next) => {
  const data = req.body
  const project = projects.find((project) => project.id === data.id)
  if (project) return res.status(400).send('project already exist')

  projects.push(data)

  fs.writeFile('./projectsMock.json', JSON.stringify(projects), (err) => {
    if (err) res.status(500).send('Error writing file:', err)
  })

  return res.status(201).send(projects)
}

exports.put = (req, res, next) => {
  const id = req.params.id
  const data = req.body
  let projectAffected = []
  projects.map((project) => {
    if (project.id === id) {
      project.title = data.title
      projectAffected.push(project)
    }
    return project
  })

  fs.writeFile('./projectsMock.json', JSON.stringify(projects), (err) => {
    if (err) res.status(500).send('Error writing file:', err)
  })

  return res.status(201).send(projectAffected)
}

exports.delete = (req, res, next) => {
  const id = req.params.id

  const newProjects = projects.filter((project) => project.id !== id)

  fs.writeFile('./projectsMock.json', JSON.stringify(newProjects), (err) => {
    if (err) res.status(500).send('Error writing file:', err)
  })

  return res.status(201).json(newProjects)
}

exports.get = (req, res, next) => {
  fs.readFile('./projectsMock.json', 'utf8', (err, projects) => {
    if (err) res.status(500).send('Error on get projects:', err)
    return res.status(200).json(JSON.parse(projects))
  })
}

exports.postTasks = (req, res, next) => {
  const data = req.body
  const id = req.params.id

  const projectAffected = []
  projects.map((project) => {
    if (project.id === id) {
      project.tasks ? project.tasks.push(data.title) : (project.tasks = [data.title])
      projectAffected.push(project)
    }
    return project
  })
  fs.writeFile('./projectsMock.json', JSON.stringify(projects), (err) => {
    if (err) res.status(500).send('Error writing file:', err)
  })

  res.status(201).send(projectAffected)
}
