'use strict';

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var AdminSchema = mongoose.Schema({
    nombreUsuario: String,
    password: String
});

module.exports = mongoose.model('Admin',AdminSchema);