'use strict'
const jwt = require('jwt-simple')
const moment = require('moment')
const secret = 'servicio_docentes'

exports.asegurarAutenticacion = function (req, res, next) {
  if (!req.headers.authorization) {
    return res.status(403).send({ message: 'Not authorized' })
  }
  const token = req.headers.authorization.replace(/['"]+/g, '')

  try {
    var payload = jwt.decode(token, secret)
    if (payload.exp <= moment().unix()) {
      return res.status(401).send({ message: 'Token expired' })
    }
  } catch (err) {
    console.log(err)
    return res.status(403).send({ message: 'Token not valid' })
  }
  req.maestro = payload
  next()
}
