const express = require('express')
const router = express.Router()
const { projects } = require('../data')
const { authUser } = require('../basicAuth')
const { canViewProject, canModifyProject, scopedProjects } = require('../permissions/project')

// app.get('/projects')
router.get('/', authUser, (req, res) => {
  res.json(scopedProjects(req.user, projects))
})

// app.get('/projects/:projectId')
router.get('/:projectId', setProject, authUser, authGetProject, (req, res) => {
  res.json(req.project)
})

router.delete('/:projectId', setProject, authUser, authModifyProject, (req, res) => {

  projects.splice(projects.indexOf(req.project),1)
  res.send('Deleted Project')
})

router.put('/:projectId', setProject, authUser, authModifyProject, (req, res) => {

  projects[projects.indexOf(req.project)]["progress"] = req.body.progress
  res.send('Modified Project')
})


function setProject(req, res, next) {
  const projectId = parseInt(req.params.projectId)
  req.project = projects.find(project => project.id === projectId)
  
  if (req.project == null) {
    res.status(404)
    return res.send('Project not found')
  }
  next()
}

function authGetProject(req, res, next) {
  if (!canViewProject(req.user, req.project)) {
    res.status(401)
    return res.send('Not Allowed')
  }

  next()
}

function authModifyProject(req, res, next) {

  if (!canModifyProject(req.user, req.project)) {
    res.status(401)
    return res.send('Not Allowed')
  }

  next()

}

module.exports = router