'use strict'
const bcrypt = require('bcrypt')
const Maestro = require('../models/maestros')
const jwt = require('../services/jwt')
function test (req, res) {
  res.status(200).send({
    message: 'El controlador funciona'
  })
}
// setters de los atributos de la instancia maestro

function loginMaestro (req, res) {
  const params = req.body
  const numeroTrabajador = params.numero_trabajador
  const password = params.password

  Maestro.findOne({ numero_trabajador: numeroTrabajador }, (err, maestro) => {
    if (err) {
      res.status(500).send({ message: 'Error en la petición' })
    } else {
      if (!maestro) {
        res.status(404).send({ message: 'No existe el usuario, favor de contactar con administración' })
      } else {
        bcrypt.compare(password, maestro.password, function (err, result) {
          if (err) {
            throw err
          } else
          if (result) {
            if (params.gethash) {
              console.log('entre')
              // devolver token jwt
              res.status(200).send({
                token: jwt.createToken(maestro)
              })
            } else {
              res.status(200).send({ maestro: maestro })
            }
          } else {
            res.status(500).send({ message: 'Contraseña Invalida' })
          }
        })
      }
    }
  })
}

module.exports = {
  test,
  loginMaestro

}
