'use strict'

const mongoose = require('mongoose')
const app = require('./app')
// var port = process.env.PORT || 3977;
const port = 8080

// coneccion a la base de datos

mongoose.connect('mongodb://localhost:27017/PaginaWebServicioSocial', (err, res) => {
  if (err) {
    throw err
  } else {
    console.log('La base de datos de virus a sido actualizada')
    app.listen(port, function () {
      console.log('Servidor del API rest escuchando en http://localhost:' + port)
    })
  }
}
)
