var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var pacientesSchema = Schema({
    idPacientes: Integer,
    sexo: String,
    Nacimiento:Date

})

const pacientes = mongoose.model('pacientes',pacientesSchema);
module.exports= pacientes;


