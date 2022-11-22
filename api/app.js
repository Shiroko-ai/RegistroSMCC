'use strict'

const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const app = express()
app.use(cors())
const userRoutes = require('./routes/user')
const adminRoutes = require('./routes/admin')
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use('/admin/', adminRoutes)
app.use('/user/', userRoutes)
module.exports = app
