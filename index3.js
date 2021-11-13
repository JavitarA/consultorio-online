//request response a la consola 

var http = require("http");
var fs = require('fs');

var manejador = function (req, res){
    res.writehead(200, {'Content-Type':'text/html'});
    res.write(fs.readFile('./hola.html')); 
   // res.write('<h1>Hola Clase b23</h1>');
    res.end();
};

var servidor = http.createServer(manejador).servidor.listen(3000);



console.log('servidor corriendo en puerto 3000');



