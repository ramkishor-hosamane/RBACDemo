const express = require('express')
const app = express()
const { ROLE, users } = require('./data')
const { authUser, authRole ,generateAccessToken} = require('./basicAuth')
const projectRouter = require('./routes/projects')

app.use(express.json())
//app.use(setUser)
app.use('/projects', projectRouter)

app.get('/', (req, res) => {
  res.send('Home Page')
})

app.get('/dashboard',authUser, (req, res) => {
  res.send('Dashboard Page')
})

app.post('/login', (req, res) => {
  // Authenticate User
  
  const user = users.find(user => user.name === req.body.username)
  //const user = { id: 1, name: 'Ram', role: ROLE.ADMIN }
 
  if(user==null)
    res.status(401).send("User not found")
  const accessToken = generateAccessToken(user)
  res.json({ accessToken: accessToken,role:user.role })
})





app.listen(3000)