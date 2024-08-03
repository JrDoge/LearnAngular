// server.js
const jsonServer = require('json-server')
const server = jsonServer.create()
const sort = require('./sort')
const search = require('./search')
const paginate = require('./paginate')
const auth = require('./auth')
const path = require('path')
const router = jsonServer.router(path.join(__dirname, 'db.json'))
const middlewares = jsonServer.defaults()

// const lowdb = require('lowdb')
const lowdb = require('lowdb')

server.use(middlewares)
server.use(auth)
server.use(sort)
server.use(paginate)
server.use(search)
server.use(router)

server.listen(3001, () => {
  console.log('JSON Server is running')
})