const express = require("express")
const OngController = require('./controllers/OngController')
const IncidentController = require('./controllers/IncidentController')
const ProfileController = require('./controllers/ProfileController')
const SessionController = require('./controllers/SessionController')

const route = express.Router();

route.post('/session', SessionController.store)

route.get('/ongs', OngController.index)
route.post('/ongs', OngController.store)

route.get('/profile', ProfileController.index)

route.get('/incidents', IncidentController.index)
route.post('/incidents', IncidentController.store)
route.delete('/incidents/:id', IncidentController.delete)


module.exports = route;