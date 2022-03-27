const express = require('express')
const router = express.Router()
const { users, ROLE } = require('../data')
const { authUser } = require('../basicAuth')

router.get('/', authUser,authAdminRole, (req, res) => {

  res.send(users)

})



router.delete('/:projectId', authUser, (req, res) => {

 
})

router.put('/:projectId', authUser, (req, res) => {


})


function setProject(req, res, next) {
  // const projectId = parseInt(req.params.projectId)
  // req.project = projects.find(project => project.id === projectId)
  
  // if (req.project == null) {
  //   res.status(404)
  //   return res.send('Project not found')
  // }
  next()
}

function authAdminRole(req, res, next) {
  if (req.user.role!==ROLE.ADMIN) {
    res.status(401)
    return res.send('Not Allowed')
  }
  next()
}



module.exports = router