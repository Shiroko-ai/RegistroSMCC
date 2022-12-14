'use strict'

const mongoose = require('mongoose')

const AdminSchema = mongoose.Schema({
  nombre: String,
  user: String,
  password: String,
  is_admin: Boolean
})

module.exports = mongoose.model('Admin', AdminSchema)
