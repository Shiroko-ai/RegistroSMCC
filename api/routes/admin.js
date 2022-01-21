'use strict'
//rutas para el controlador de los maestros
var express = require('express');
var AdminControllers = require('../controllers/admin');//Aqui se obtiene el modulo que se exporto en maestros.js
var api = express.Router();
var md_auth = require('../middlewares/autenticate');
api.post('/register',AdminControllers.saveMaestro);
api.post('/login',AdminControllers.loginAdmin);
api.put('/update-maestro/',AdminControllers.updateMaestro);//el id es obligatorio, por eso se agrega el :id,md_auth.
api.post('/delete-maestro/',AdminControllers.deleteMaestro);
api.post('/register-admin/',AdminControllers.saveAdmin);
api.post('/delete-admin/',AdminControllers.deleteAdmin);
module.exports = api;//Se tiene que exportar la api para hacer las rutas