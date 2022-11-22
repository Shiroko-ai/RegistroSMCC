'use strict'

const mongoose = require('mongoose')
// Nos permite crear esquemas de la base de datos

const UserSchema = mongoose.Schema({
  username: String,
  password: String,
  correo: String,
  correo_institucional: String,
  nombre: String,
  apellido_paterno: String,
  apellido_materno: String,
  genero: String,
  tipo_membresia: String,
  id: String,
  perfil_profesional: String,
  ocupacion: String,
  institucion: String,
  estado: String,
  area_interes: String,
  eventos: String,
  colaboracion: String,
  motivo: String

  // todo: implementar el comprobante de pago
})

module.exports = mongoose.model('User', UserSchema)
