'use strict'
var bcrypt = require('bcrypt');
var Maestro = require('../models/maestros');
var jwt = require('../services/jwt');
function test(req, res){
    res.status(200).send({
        message: 'El controlador funciona'
    });
}
//setters de los atributos de la instancia maestro

function loginMaestro(req, res) {
    var params = req.body;
    console.log(params);
    var numero_trabajador = params.numero_trabajador;
    var password = params.password;
    
    Maestro.findOne({numero_trabajador: numero_trabajador},(err,maestro) => {
        if(err){
            res.status(500).send({message: 'Error en la petición'});
        }
        else{
            if(!maestro){
                res.status(404).send({message: 'No existe el usuario, favor de contactar con administración'});
                
            }
            else{
                console.log(maestro);
                bcrypt.compare(password,maestro.password, function(err, result){
                    if(result){
                        if(params.gethash){
                            //devolver token jwt
                            res.status(200).send({
                                token: jwt.createToken(maestro)
                            });
                        }else{
                            res.status(200).send({maestro:maestro});
                        }
                    }
                    else{
                        res.status(500).send({message: 'Contraseña Invalida'});
                    }
                });
            }
        }
    });
}

module.exports = {
    test,
    loginMaestro
    
};