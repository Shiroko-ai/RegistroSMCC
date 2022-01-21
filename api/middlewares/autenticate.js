'use strict'
var jwt = require('jwt-simple');
var moment = require('moment');
var secret = 'servicio_docentes'

exports.asegurarAutenticacion = function(req, res, next) {
    if(!req.headers.authorization){
        return res.status(403).send({message: 'Not authorized'});
    }
    var token = req.headers.authorization.replace(/['"]+/g, '');

    try{
        var payload = jwt.decode(token,secret);
        if(payload.exp <= moment().unix()){
            return res.status(401).send({message:'Token expired'})
        }
    }catch(err){
        console.log(err);
        return res.status(403).send({message: 'Token not valid'});
    }
    req.maestro = payload;
    next();
};