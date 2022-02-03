'use strict'

const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const app = express()
app.use(cors())
// cargar rutas

const maestroRoutes = require('./routes/maestros')
const adminRoutes = require('./routes/admin')
// configuracion de bodyparser
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())// convertir a objetos json
// configurar cabeceras http

// rutas base
app.use('/maestros/', maestroRoutes)
// Siempre se va a poner api atras de las rutas dentro de la carpeta routes/maestros.js
app.use('/administration/', adminRoutes)
module.exports = app
