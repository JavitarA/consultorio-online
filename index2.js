var express = require('express');

var app = express();




var app = express(function (req, res){
    res.send('<h1>Hola Clase b23</h1>');
    
});

app.listen(3000, function (err){
    console.log('Ejemplo')
});

