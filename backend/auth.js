const secretToken = 'JrDfsdfse254353$240399Saw'
function authMiddleware (req, res, next) {
    if(req.method !== 'GET' || req.path !== "/user"){
      const authHeader = req.headers.authorization;
      if(!authHeader){
        res.sendStatus(401)
        return
      } 
        try {
          authHeader == secretToken
        } catch {
          res.sendStatus(401)
          return
        }
    }
    next();
}

module.exports = authMiddleware