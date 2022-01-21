'use strict'

var mongoose = require('mongoose');
var Schema = mongoose.Schema;//Nos permite crear esquemas de la base de datos

var MaestroSchema = mongoose.Schema({
    numero_trabajador: String,
    apellido_paterno: String,
    apellido_materno: String,
    nombre: String,
    academia: String,
    correo: String,
    celular_encargado: String,
    password: String
});

module.exports = mongoose.model('Maestro',MaestroSchema);