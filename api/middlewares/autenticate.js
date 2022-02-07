'use strict'
const auth = require('../../JWTKEYS.json')
const tokens = []
const jwt = require('jsonwebtoken')

exports.generateAccessToken = function (user) {
  const token = jwt.sign(user, auth.Authkey, { expiresIn: '5m' })
  tokens.push(token)
  console.log(tokens)
  return token
}
