const express = require('express')
const bodyParser = require('body-parser')
const checkId = require('../src/middlewares/checkId')
const requestsCount = require('../src/middlewares/requestsCount')

module.exports = () => {
  const app = express()

  app.use(bodyParser.urlencoded({ extended: true }))
  app.use(bodyParser.json())
  app.use('/projects/:id', checkId)
  app.use(requestsCount)

  require('../src/routes/index')(app)

  app.set('port', '3000')

  return app
}
