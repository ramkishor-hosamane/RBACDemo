const express = require('express')
const app = express()
const { ROLE, users,projects } = require('./data')
const { authUser, authRole ,generateAccessToken} = require('./basicAuth')
const {scopedProjects } = require('./permissions/project')

const projectRouter = require('./routes/projects')
const userRouter = require('./routes/user')

const cors = require('cors');
app.use(cors());
app.options('*', cors());
app.use(express.json())
//app.use(setUser)
app.use('/projects', projectRouter)
app.use('/users', userRouter)

app.get('/', (req, res) => {

  res.send('Home Page')
})

app.get('/dashboard',authUser, (req, res) => {
  //const project_list =  projects.map(project=>[project.id,project.name])
  const user_projects = scopedProjects(req.user,projects)
  const project_list =  user_projects.map(project=>[project.id,project.name])

  res.send(project_list)
})

app.post('/login', (req, res) => {
  // Authenticate User
  
  const user = users.find(user => user.name === req.body.username)
  //const user = { id: 1, name: 'Ram', role: ROLE.ADMIN }
 
  if(user==null)
    res.status(401).send("User not found")
    
  const accessToken = generateAccessToken(user)
  res.json({ accessToken: accessToken,user:user })
})





app.listen(3000)