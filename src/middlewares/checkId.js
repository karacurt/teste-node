module.exports = function checkId(req, res, next) {
  const id = req.params.id
  console.log(id)

  const projects = require('../../projectsMock.json')
  if (!projects) return
  const project = projects.find((project) => project.id === id)
  if (!project) {
    res.status(404).json({ message: 'id not found.' })
  } else {
    console.log('id existe')
    next()
  }
}
