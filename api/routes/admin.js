'use strict'
// rutas para el controlador de los maestros
const express = require('express')
const AdminControllers = require('../controllers/admin')// Aqui se obtiene el modulo que se exporto en maestros.js
const api = express.Router()
// const mdAuth = require('../middlewares/autenticate')
api.post('/register', AdminControllers.saveMaestro)
api.post('/login', AdminControllers.loginAdmin)
api.put('/update-maestro/', AdminControllers.updateMaestro)// el id es obligatorio, por eso se agrega el :id,md_auth.
api.post('/delete-maestro/', AdminControllers.deleteMaestro)
api.post('/register-admin/', AdminControllers.saveAdmin)
api.post('/delete-admin/', AdminControllers.deleteAdmin)
module.exports = api// Se tiene que exportar la api para hacer las rutas
