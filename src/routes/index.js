const projectsHandler = require('../handlers/projects')
module.exports = (app) => {
  app.post('/projects', projectsHandler.post)

  app.get('/projects', projectsHandler.get)

  app.put('/projects/:id', projectsHandler.put)

  app.delete('/projects/:id', projectsHandler.delete)

  app.post('/projects/:id/tasks', projectsHandler.postTasks)
}
