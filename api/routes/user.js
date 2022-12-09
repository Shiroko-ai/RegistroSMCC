'use strict'
const api = require('express').Router()
const UserControllers = require('../controllers/user')
api.post('/login', UserControllers.loginUser)
api.post('/register', UserControllers.saveUser)
api.delete('/delete', UserControllers.deleteUser)
api.post('/get-users', UserControllers.getUsers)
api.post('/update', UserControllers.updateUser)
api.post('/return-table', UserControllers.returnTable)
api.post('/send-email', UserControllers.sendEmail)
module.exports = api
