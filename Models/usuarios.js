var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var UsuariosSchema=Schema({
    idUsuario:Integer,
    nombre:String,
    apellido:String,
    email:String,
    tipoUsuario:String,
    
    tipoDocumento:String,
    NoDocumento:Integer,
    direccion:String,




    });

const Usuarios = mongoose.model('usuarios',UsuariosSchema);
module.exports = Usuarios;


