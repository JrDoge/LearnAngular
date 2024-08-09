// server.js
const jsonServer = require('json-server')
const server = jsonServer.create()
const coursesMiddleware = require('./courses')
const auth = require('./auth')
const path = require('path');

const router = jsonServer.router(path.join(__dirname, 'db.json'))
const middlewares = jsonServer.defaults()
const low = require('lowdb')
const FileSync = require('lowdb/adapters/FileSync');
const fs = require('fs');
 
const adapter = new FileSync(path.join(__dirname, 'db.json'));
const db = low(adapter);

server.use(middlewares)

server.use(jsonServer.bodyParser)
server.get('/token', function(req, res, next){

  const users = db.get("users").value()
  if (!users) {
    res.sendStatus(404);
    return;
  }
  res.locals.data = users
  auth(req, res, next)
})

server.post('/token', function(req, res){

  const users = db.get("users").value()
  const body = req.body
  if (!users) {
    res.sendStatus(404);
    return;
  }
  res.locals.data = users

  const result = res.locals.data.find((user) => user.login.toLowerCase() == body.login.toLowerCase() && user.password == body.password)
  if(!result){
    res.sendStatus(401)
    return;
  }
  res.jsonp(result)
})

server.use(auth)

server.get('/courses', function (req, res, next) {

  const courses = db.get("courses").value()
  if (!courses) {
    res.sendStatus(404);
    return;
  }
  res.locals.data = courses
  coursesMiddleware(req, res, next)
})

server.get('/authors', function(req, res){

  const authors = db.get("authors").value()
  if (!authors) {
    res.sendStatus(404);
    return;
  }
 
  res.jsonp(authors)
})

server.use(router)



server.listen(3001, () => {
  console.log('JSON Server is running')
})