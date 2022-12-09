'use strict'
const bcrypt = require('bcryptjs')
const User = require('../models/user')
const nodemailer = require('nodemailer')
function saveUser (req, res) {
  const user = new User()
  console.log('entre')
  const params = req.body
  user.username = params.username
  user.password = params.password
  user.correo_electronico = params.correo_electronico
  user.correo_institucional = params.correo_institucional
  user.nombre = params.nombre
  user.apellido_paterno = params.apellido_paterno
  user.apellido_materno = params.apellido_materno
  user.genero = params.genero
  user.id = params.id
  user.tipo_membresia = params.tipo_membresia
  user.area_interes = params.area_interes
  user.eventos = params.eventos
  user.colaboracion = params.colaboracion
  user.motivo = params.motivo
  user.institucion = params.institucion
  console.log(user)
  // TODO: encriptar la contraseña
  const saltRounds = 10
  if (params.password) {
    bcrypt.genSalt(saltRounds, function (err, salt) {
      if (err) {
        throw err
      }
      bcrypt.hash(params.password, salt, function (err, hash) {
        if (err) {
          throw err
        }
        user.password = hash

        if (user.username !== '' && user.password !== '' && user.correo_electronico !== '' && user.correo_institucional !== '' &&
          user.nombre !== '' && user.apellido_paterno !== '' && user.apellido_materno !== '' && user.genero !== '' && user.id !== '' &&
          user.tipo_membresia !== '' && user.area_interes !== '' && user.eventos !== '' && user.colaboracion !== '' && user.motivo !== '' && user.institucion !== '') {
          user.save((err, userStored) => { // Aqui se guarda el usuario
            console.log('entre otra vez')
            if (err) {
              res.status(500).send({ message: 'Error al guardar usuario' })
            } else {
              if (!userStored) {
                res.status(404).send({ message: 'No se ha registrado el usuario' })
              } else {
                // res.status(200).send({ maestro: maestroStored })
                console.log('usuario guardado', userStored)
                res.status(200).send({ message: 'Se ha registrado exitosamente.' })
              }
            }
          })
        } else {
          res.status(200).send({ message: 'Introduce todos los campos.' })
        }
      })
    })
  } else {
    res.status(500).send({ message: 'Introduce la contraseña.' })
  }
}
function loginUser (req, res) {
  const params = req.body
  const correoElectronico = params.correo_electronico
  const password = params.password
  console.log(correoElectronico)
  User.findOne({ correo_electronico: correoElectronico }, (err, user) => {
    if (err) {
      res.status(500).send({ message: 'Error en la petición' })
    } else {
      if (!user) {
        res.status(404).send({ message: 'No existe el usuario' })
      } else {
        console.log(user)
        bcrypt.compare(password, user.password, function (err, result) {
          if (err) {
            throw err
          }
          if (result) {
            if (params.gethash) {
              // devolver token jwt
              res.status(200).send({
              })
            } else {
              res.status(200).send({ user: user })
            }
          } else {
            res.status(500).send({ message: 'El usuario no ha podido acceder' })
          }
        })
      }
    }
  })
}
function updateUser (req, res) {
  const id = req.params.id
  const update = req.body
  User.findByIdAndUpdate(id, update, (err, userUpdated) => {
    if (err) {
      res.status(500).send({ message: 'Error al actualizar el usuario' })
    } else {
      if (!userUpdated) {
        res.status(404).send({ message: 'No se a podido actualizar el usuario' })
      } else {
        res.status(200).send({ message: userUpdated })
      }
    }
  })
}

function deleteUser (req, res) {
  const params = req.body
  const username = params.username

  User.findOneAndDelete({ username: username }, (err, user) => {
    console.log(user)
    if (err) {
      res.status(500).send({ message: 'Error al borrar el usuario' })
    } else {
      if (!user) {
        res.status(404).send({ message: 'No se encontro el maestro' })
      } else {
        res.status(200).send({ message: 'El usuario' + username + 'ha sido eliminado' })
      }
    }
  })
}
function getUsers (req, res) {
  User.find({}, (err, usuarios) => {
    if (err) {
      throw err
    } else {
      const sendusers = []
      usuarios.forEach(usuario => { sendusers.push(usuario) })
      console.log(sendusers)
      res.status(200).send({ sendusers })
    }
  })
}
function returnTable(req, res) {
  const params = req.body
  console.log('entre')
  if (params.value === 'genero') {
    User.find({ genero: 'Femenino' }, (err, generofemenino) => {
      if (err) {
        res.status(500).send({ error: 'Un error inesperado ha ocurrido' })
      } else {
        User.find({ genero: 'Masculino' }, (err, generomasculino) => {
          if (err) {
            res.status(500).send({ error: 'Un error inesperado ha ocurrido' })
          } else {
            if (generofemenino > generomasculino) {
              res.status(200).send({
                valor1: generofemenino.length,
                valor2: generomasculino.length,
                total: generofemenino.length,
                Titular: 'Genero'
              })
            } else {
              res.status(200).send({
                valor1: generofemenino.length,
                valor2: generomasculino.length,
                total: generomasculino.length,
                Titular: 'Genero'
              })
            }
          }
        }
        )
      }
    }
    )
  } else if (params.value === 'activos') {
    User.find({ genero: 'Femenino' }, (err, generofemenino) => {
      if (err) {
        res.status(500).send({ error: 'Un error inesperado ha ocurrido' })
      } else {
        User.find({ genero: 'Masculino' }, (err, generomasculino) => {
          if (err) {
            res.status(500).send({ error: 'Un error inesperado ha ocurrido' })
          } else {
            if (generofemenino > generomasculino) {
              res.status(200).send({
                femenino: generofemenino.length,
                masculino: generomasculino.length,
                total: generofemenino.length,
                Titular: 'Genero'
              })
            } else {
              res.status(200).send({
                femenino: generofemenino.length,
                masculino: generomasculino.length,
                total: generomasculino.length,
                Titular: 'Genero'
              })
            }
          }
        }
        )
      }
    }
    )
  } else if (params.value === 'membresia') {
    User.find({ tipo_membresia: 'Titular' }, (err, titular) => {
      if (err) {
        res.status(500).send({ error: 'Un error inesperado ha ocurrido' })
      } else {
        User.find({ genero: 'Estudiante' }, (err, estudiante) => {
          if (err) {
            res.status(500).send({ error: 'Un error inesperado ha ocurrido' })
          } else {
            if (titular > estudiante) {
              res.status(200).send({
                valor1: titular.length,
                valor2: estudiante.length,
                total: titular.length,
                Titular: 'Membresía'
              })
            } else {
              res.status(200).send({
                valor1: titular.length,
                valor2: estudiante.length,
                total: estudiante.length,
                Titular: 'Membresía'
              })
            }
          }
        }
        )
      }
    }
    )
  }
}
function sendEmail (req, res) {
  const params = req.body
  console.log(params)
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'gaticovanced.1@gmail.com',
      pass: 'gwxgrybvhnvkuoix'
    }
  })

  const mailOptions = {
    from: 'gaticovanced.1@gmail.com',
    to: 'ivanpalacios2809@gmail.com',
    subject: params.asunto,
    text: params.message
  }

  transporter.sendMail(mailOptions, function(error, info) {
    if (error) {
      console.log(error)
    } else {
      console.log('Email sent: ' + info.response)
    }
  })
}
module.exports = {
  loginUser: loginUser,
  saveUser: saveUser,
  deleteUser: deleteUser,
  updateUser: updateUser,
  getUsers: getUsers,
  returnTable: returnTable,
  sendEmail: sendEmail
}
