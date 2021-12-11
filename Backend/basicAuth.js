const jwt = require('jsonwebtoken')

function authRole(role) {
  return (req, res, next) => {
    if (req.user.role !== role) {
      res.status(401)
      return res.send('Not allowed')
    }
    next()
  }
}

function authUser(req, res, next) {
  const authHeader = req.headers['authorization']
  const token = authHeader && authHeader.split(' ')[1]
  if (token == null) return res.sendStatus(401)

  jwt.verify(token, 'secretkey', (err, user) => {
    console.log(err)
    if (err) return res.sendStatus(403)
    req.user = user
    next()
  })
}

function generateAccessToken(user) {
  return jwt.sign(user,'secretkey')
}


module.exports = {
  authUser,
  authRole,
  generateAccessToken
}