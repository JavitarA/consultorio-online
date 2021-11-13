const mongoose=require('mongoose');

mongoose.connect("mongodb://localhost:27017/consultoriobd", (err,res)=>{
    if(err){
        throw err;
    }else{
        console.log('La conexion a la base de datos fue correcta...')
}
});


/*var app = require('./app');
var mongoose =require('./src/conexBD/conn');
var port = 4000;
app.listen(port, () =>{
console.log("servidor corriendo ok")
});*/

module.exports =mongoose;
