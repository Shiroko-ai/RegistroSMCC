'use strict'
const { application } = require('express')
// rutas para el controlador de los maestros
const express = require('express')
const UserControllers = require('../controllers/user')// Aqui se obtiene el modulo que se exporto en maestros.js
const api = express.Router()
// const mdAuth = require('../middlewares/autenticate')
// api.get('/probando-controlador', mdAuth.asegurarAutenticacion, MaestrosControllers.test)// Aqui se crea la ruta
api.post('/login', UserControllers.loginUser)
api.post('/register', UserControllers.registerUser)
api.delete('/delete', UserControllers.deleteUser)
api.post('/get-users',UserControllers.getUsers)
api.update('/update', UserControllers.updateUser)
module.exports = api// Se exporta un modulo mas.
// IMPORTANT : La url que se antepone es /maestros/
