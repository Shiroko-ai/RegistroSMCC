'use strict'
const bcrypt = require('bcryptjs')
const Admin = require('../models/admin')
const User = require('../models/user')
// este controlador debe de ejecutarlo unicamente el admin debido a que es el unico que podra guardar maestros
function saveAdmin (req, res) {
  const admin = new Admin()
  const params = req.body
  console.log('usuario' + params.user)
  admin.nombre = params.nombre
  admin.user = params.user
  admin.password = params.password
  admin.is_admin = params.is_admin
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
        admin.password = hash

        if (admin.nombre !== null && admin.user !== null && admin.password !== null && admin.isadmin !== null) {
          admin.save((err, adminStored) => { // Aqui se guarda el usuario
            if (err) {
              res.status(500).send({ message: 'Error al guardar usuario' })
            } else {
              if (!adminStored) {
                res.status(404).send({ message: 'No se ha registrado el usuario' })
              } else {
                if (admin.is_admin) {
                  console.log('administrador guardado', adminStored)
                  res.status(200).send({ message: 'Se ha guardado el administrador con exito' })
                } else {
                  res.status(200).send({ message: 'Se ha guardado el mmd con exito' })
                  console.log('mmd' + adminStored)
                }
              }
            }
          })
        } else {
          res.status(200).send({ message: 'introduce todos los campos' })
        }
      })
    })
  } else {
    res.status(500).send({ message: 'introduce la contraseña' })
  }
}
function loginAdmin (req, res) {
  const params = req.body

  const user = params.user
  const password = params.password

  Admin.findOne({ user: user }, (err, admin) => {
    if (err) {
      res.status(500).send({ message: 'Error en la petición' })
    } else {
      if (!admin) {
        res.status(404).send({ message: 'No existe el usuario' })
      } else {
        console.log(admin)
        bcrypt.compare(password, admin.password, function (err, result) {
          if (err) {
            throw err
          }
          if (result) {
            if (params.gethash) {
              // devolver token jwt
              res.status(200).send({
              })
            } else {
              res.status(200).send({ admin: admin })
            }
          } else {
            res.status(500).send({ message: 'El usuario no ha podido acceder' })
          }
        })
      }
    }
  })
}
function updateAdmin (req, res) {
  const id = req.params.id
  const update = req.body
  Admin.findByIdAndUpdate(id, update, (err, adminUpdated) => {
    if (err) {
      res.status(500).send({ message: 'Error al actualizar el usuario' })
    } else {
      if (!adminUpdated) {
        res.status(404).send({ message: 'No se a podido actualizar el usuario' })
      } else {
        res.status(200).send({ message: adminUpdated })
      }
    }
  })
}

function deleteAdmin (req, res) {
  const params = req.body
  const admin = params.user

  Admin.findOneAndDelete({ user: admin }, (err, maestro) => {
    console.log(admin)
    if (err) {
      res.status(500).send({ message: 'Error al borrar el usuario' })
    } else {
      if (!maestro) {
        res.status(404).send({ message: 'No se encontro el maestro' })
      } else {
        res.status(200).send({ message: 'El administador' + admin + 'ha sido eliminado' })
      }
    }
  })
}

function returnTable(req, res) {
  const params = req.body
  console.log('entre')
  if (params.value === 'genero') {
    let contadorfemenino = 0
    let contadormasculino = 0
    User.find({ genero: 'Femenino' }, (err, generofemenino) => {
      if (err) {
        res.status(500).send({ error: 'Un error inesperado ha ocurrido' })
      } else {
        contadorfemenino = generofemenino.length
      }
    }
    )
    User.find({ genero: 'Masculino' }, (err, generofemenino) => {
      if (err) {
        res.status(500).send({ error: 'Un error inesperado ha ocurrido' })
      } else {
        contadormasculino = generofemenino.length
      }
    }
    )
    res.status(200).send({ femenino: contadorfemenino, masculino: contadormasculino })
  }
}
function getAdmins (req, res) {
  const params = req.body
  Admin.find({ is_admin: params.admins }, (err, maestros) => {
    if (err) {
      throw err
    } else {
      const sendmaestros = []
      maestros.forEach(maestro => { sendmaestros.push(maestro) })
      res.status(200).send({ sendmaestros })
    }
  })
}
module.exports = {
  loginAdmin: loginAdmin,
  saveAdmin: saveAdmin,
  deleteAdmin: deleteAdmin,
  updateAdmin: updateAdmin,
  getAdmins: getAdmins,
  returnTable: returnTable
}
