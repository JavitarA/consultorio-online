var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var medicosSchema = Schema({
    idMedico: Integer,
    especialidad: String,
    
})

const medicos = mongoose.model('medicos',medicosSchema);
module.exports= medicos;


