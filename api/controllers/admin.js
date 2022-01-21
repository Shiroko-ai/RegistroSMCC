'use strict'
var bcrypt = require('bcrypt');
var Maestro = require('../models/maestros');
var jwt = require('../services/jwt');
var Admin = require('../models/admin');
const { param } = require('../routes/admin');
const { removeListener } = require('npmlog');
const e = require('express');
//este controlador debe de ejecutarlo unicamente el admin debido a que es el unico que podra guardar maestros
function saveMaestro(req, res){
    var maestro = new Maestro();

    var params = req.body;
    maestro.nombre = params.nombre;
    maestro.numero_trabajador = params.numero_trabajador;
    maestro.apellido_paterno = params.apellido_paterno;
    maestro.apellido_materno = params.apellido_materno;
    maestro.academia = params.academia;
    maestro.correo = params.correo;
    maestro.celular_encargado = params.celular_encargado;
    
    //TODO: encriptar la contraseña
    const saltRounds = 10;
    if(params.password){
        bcrypt.genSalt(saltRounds, function(err, salt) {
            bcrypt.hash(params.password, salt, function(err, hash) {
                maestro.password = hash;

            if(maestro.nombre != null && maestro.numero_trabajador!=null && maestro.apellido_paterno!=null && maestro.apellido_materno!=null && maestro.academia!=null && maestro.correo != null && maestro.celular_encargado!=null){
                
                maestro.save((err,maestroStored)=>{//Aqui se guarda el usuario
                    if(err){
                        res.status(500).send({message: 'Error al guardar usuario'})
                    }else{
                        if(!maestroStored){
                            res.status(404).send({message: 'No se ha registrado el usuario'});
                        }else{
                            res.status(200).send({maestro : maestroStored});
                        }
                    }
                });
            }
             else{
                res.status(200).send({message:'introduce todos los campos'});
            }
        });
    });
       
    }
    else{
        res.status(500).send({message:'introduce la contraseña'});
    }
}
function loginAdmin(req, res) {
    var params = req.body;

    var nombre = params.numero_trabajador;
    var password = params.password;
    
    Admin.findOne({nombre: nombre},(err,admin) => {
        if(err){
            res.status(500).send({message: 'Error en la petición'});
        }

        else{
            if(!admin){
                res.status(404).send({message: 'No existe el usuario'});
                
            }
            else{
                console.log(admin);
                bcrypt.compare(password,admin.password, function(err, result){
                    if(result){
                        if(params.gethash){
                            //devolver token jwt
                            res.status(200).send({
                                token: jwt.createToken(admin)
                            });
                        }else{
                            res.status(200).send({admin:admin});
                        }
                    }
                    else{
                        res.status(500).send({message: 'El usuario no ha podido acceder'});
                    }
                });
            }
        }
    });
}
function updateMaestro(req, res){
    var id = req.params.id;
    var update = req.body;
    Maestro.findByIdAndUpdate(id, update,(err, maestroUpdated)=>{
        if(err){
            res.status(500).send({message: 'Error al actualizar el usuario'});
        }
        else{
            if(!maestroUpdated){
                res.status(404).send({message: 'No se a podido actualizar el usuario'});
            }else{
                res.status(200).send({message: maestroUpdated});
            }
        }
    });
}

function deleteMaestro(req, res) {
    var params = req.body;
    var numero_trabajador = params.numero_trabajador;
    
    Maestro.findOneAndDelete({numero_trabajador:numero_trabajador}, (err,maestro)=>{
        console.log(numero_trabajador);
        if(err){
            res.status(500).send({message: 'Error al borrar el usuario'});
        }
        else{
            if(!maestro){
                res.status(404).send({message: 'No se encontro el maestro'});
            }
            else{
                res.status(200).send({message:maestro});
            }
        }
    });
}
function saveAdmin(req, res){
    var admin = new Admin();
    var params = req.body;
    admin.nombreUsuario = params.nombre;
    const saltRounds = 10;
    if(params.password){
        bcrypt.genSalt(saltRounds,(err,salt) => {
            bcrypt.hash(params.password,salt,(err,hash)=>{
                if(err){
                    throw err;
                }
                admin.password = hash;
            
            if(admin.nombreUsuario != null){
                admin.save((err,adminStored)=>{
                    if(err){
                        res.status(500).send({message: 'No se ha podido guardar el usuario'});
                    }
                    else{
                        res.status(200).send({admin: adminStored});
                    }
                });
                
            }
            else{
                res.status(200).send({message:'por favor ingresa el nombre del administrador que quieres agregar'});
            }
        });
    });
    }
    else{
        res.status(200).send({message:'por favor ingresa la contraseña'});
    }
    
}

function deleteAdmin(req, res) {
    var params = req.body;
    var nombreUsuario = params.nombreUsuario;
    
    Admin.findOneAndDelete({nombreUsuario:nombreUsuario}, (err,admin)=>{
        console.log(nombreUsuario);
        if(err){
            res.status(500).send({message: 'Error al borrar el usuario'});
        }
        else{
            if(!admin){
                res.status(404).send({message: 'No se encontro el administrador'});
            }
            else{
                res.status(200).send({message:admin});
            }
        }
    });
}
function updateAdmin(req, res){
    var id = req.params.id;
    var update = req.body;
    Admin.findByIdAndUpdate(id, update,(err, adminUpdated)=>{
        if(err){
            res.status(500).send({message: 'Error al actualizar el usuario'});
        }
        else{
            if(!maestroUpdated){
                res.status(404).send({message: 'No se a podido actualizar el usuario'});
            }else{
                res.status(200).send({message: adminUpdated});
            }
        }
    });
}
module.exports = {
    loginAdmin: loginAdmin,
    saveMaestro : saveMaestro,
    updateMaestro : updateMaestro,
    deleteMaestro : deleteMaestro,
    saveAdmin : saveAdmin,
    deleteAdmin : deleteAdmin,
    updateAdmin: updateAdmin
}