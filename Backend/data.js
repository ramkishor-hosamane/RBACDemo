const ROLE = {
  ADMIN: 'admin',
  BASIC: 'basic'
}

module.exports = {
  ROLE: ROLE,
  users: [
    { id: 1, name: 'Ram', role: ROLE.ADMIN },
    { id: 2, name: 'Samyak', role: ROLE.BASIC },
    { id: 3, name: 'Ritesh', role: ROLE.BASIC }
  ],
  projects: [
    { id: 1, name: "Ram's Project", userId: 1 ,progress:89},
    { id: 2, name: "Samyak's Project", userId: 2 ,progress:19},
    { id: 3, name: "Ritesh's Project", userId: 3 ,progress:23}
  ]
}