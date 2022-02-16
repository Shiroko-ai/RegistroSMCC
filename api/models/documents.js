'use strict'

const mongoose = require('mongoose')

const DocumentSchema = mongoose.Schema({
  fileName: String,
  CreationDate: String,
  LastUpdate: String
})

module.exports = mongoose.model('Document', DocumentSchema)
