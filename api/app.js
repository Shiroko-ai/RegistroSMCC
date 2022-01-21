'use strict'

var express = require('express')
var bodyParser = require('body-parser');
var cors = require('cors');
var app = express();
app.use(cors());
//cargar rutas

var maestro_routes = require('./routes/maestros');
var admin_routes = require('./routes/admin');
//configuracion de bodyparser
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());//convertir a objetos json

//configurar cabeceras http

// rutas base 
app.use('/maestros/', maestro_routes);//Siempre se va a poner api atras de las rutas dentro de la carpeta routes/maestros.js
app.use('/administration/', admin_routes);
module.exports = app;