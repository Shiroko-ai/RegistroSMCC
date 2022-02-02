'use strict'

const mongoose = require('mongoose')

const AdminSchema = mongoose.Schema({
  nombreUsuario: String,
  password: String
})

module.exports = mongoose.model('Admin', AdminSchema)
