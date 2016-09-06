import logger from 'debug'
import isArray from 'lodash/fp/isArray'
import bodyParser from 'body-parser'
import cookieParser from 'cookie-parser'
import express from 'express'
import compression from 'compression'
import config from './config/server'
import todos from './routes/todos'
import account from './routes/account'

const app = express()

// Config
app.disable('x-powered-by')
app.use(compression())

// Middleware
app.use(bodyParser.json({ limit: '2mb' }))
app.use(bodyParser.urlencoded({ limit: '2mb', extended: true }))

// Needed for authentication
app.use(cookieParser())

// Routes
app.use(todos)
app.use(account)

app.listen(config.http.port, function () {
  logger('server:start')('Listening on port ' + config.http.port)
})
