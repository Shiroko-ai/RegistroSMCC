'use strict'

const mongoose = require('mongoose')

const MMDSchema = mongoose.Schema({
  nombre: String,
  usuario: String,
  password: String
})

module.exports = mongoose.model('MMD', MMDSchema)
