'use strict'
//rutas para el controlador de los maestros
var express = require('express');
var MaestrosControllers = require('../controllers/maestros');//Aqui se obtiene el modulo que se exporto en maestros.js
var api = express.Router();
var md_auth = require('../middlewares/autenticate');
api.get('/probando-controlador',md_auth.asegurarAutenticacion, MaestrosControllers.test);//Aqui se crea la ruta
api.post('/login',MaestrosControllers.loginMaestro);
module.exports = api;//Se exporta un modulo mas.