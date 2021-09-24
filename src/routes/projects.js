const ProjectsHandler = require('../handlers/projects')
module.exports = (app) => {
  app.post('/projects', ProjectsHandler.post)

  app.get('/projects', ProjectsHandler.get)

  app.put('/projects/:id', ProjectsHandler.put)

  app.delete('/projects/:id', ProjectsHandler.delete)

  app.post('/projects/:id/tasks', ProjectsHandler.postTasks)
}
