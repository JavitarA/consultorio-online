var app = require('./Routers/app');
var mongoose = require('.conexDB/conn');
var port= 4000;
app.listen(port, () =>{
    console.log("servidor corriendo ok")
});


