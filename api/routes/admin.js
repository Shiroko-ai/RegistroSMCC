'use strict'
// rutas para el controlador de los maestros
const express = require('express')
const AdminControllers = require('../controllers/admin')// Aqui se obtiene el modulo que se exporto en maestros.js
const api = express.Router()
// const mdAuth = require('../middlewares/autenticate')
api.post('/register', AdminControllers.saveAdmin)
api.post('/login', AdminControllers.loginAdmin)
api.post('/register-admin/', AdminControllers.saveAdmin)
api.post('/delete-admin/', AdminControllers.updateAdmin)
api.get('/get-admin/', AdminControllers.getAdmins)
api.get('/get-table/', AdminControllers.returnTable)
module.exports = api// Se tiene que exportar la api para hacer las rutas
// IMPORTANT : La url que se antepone es /admin/
