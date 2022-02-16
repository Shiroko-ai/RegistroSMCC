'use strict'

const mongoose = require('mongoose')
// Nos permite crear esquemas de la base de datos

const MaestroSchema = mongoose.Schema({
  numero_trabajador: String,
  apellido_paterno: String,
  apellido_materno: String,
  nombre: String,
  academia: String,
  correo: String,
  celular_encargado: String,
  password: String,
  isAdmin: Boolean
})

module.exports = mongoose.model('Maestro', MaestroSchema)
