'use strict'
// rutas para el controlador de los maestros
const express = require('express')
const MaestrosControllers = require('../controllers/maestros')// Aqui se obtiene el modulo que se exporto en maestros.js
const api = express.Router()
// const mdAuth = require('../middlewares/autenticate')
// api.get('/probando-controlador', mdAuth.asegurarAutenticacion, MaestrosControllers.test)// Aqui se crea la ruta
api.post('/login', MaestrosControllers.loginMaestro)
module.exports = api// Se exporta un modulo mas.
// IMPORTANT : La url que se antepone es /maestros/
