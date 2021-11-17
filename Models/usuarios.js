var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var usuariosSchema=Schema({
    nombre:String,
    apellido:String,
    email:String,
    documento:String,
    numero:Number
    
    });

const Usuarios = mongoose.model('usuarios',usuariosSchema);


module.exports = Usuarios;


