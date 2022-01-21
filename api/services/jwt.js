//Crear tokens para autenticacion
'use strict'
var jwt = require('jwt-simple');
var moment = require('moment'); 
var secret = 'servicio_docentes';
exports.createToken = function(maestro){
    var payload = {
        sub: maestro._numtrabajador,
        name: maestro.nombre,
        surname: maestro.apellido,
        email: maestro.email,
        academia: maestro.academia,
        cel_encargado: maestro.cel_encargado,
        iat: moment().unix(),
        exp: moment().add(30,'days').unix
    };
    return jwt.encode(payload,secret);
};

exports.createToken = function(admin){
    var payload = {
        nombre: admin.nombreUsuario,
        password: admin.password,
        iat: moment().unix(),
        exp: moment().add(30,'days').unix
    };
    return jwt.encode(payload,secret);
};
