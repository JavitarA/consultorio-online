const { Router } = require('express');
const rutas= Router();


var controllerUsuarios = require('../Controllers/ControllerUsuarios');

rutas.get('/prueba', controllerUsuarios.prueba);
rutas.post('/crear', controllerUsuarios.saveUsuarios);
rutas.get('/buscar/:id', controllerUsuarios.buscarData);
rutas.get('buscarTodo/:id?', controllerUsuarios.listarAllData);
rutas.delete('/borrarUsuario/:id', controllerUsuarios.DeleteUsuario);
rutas.put('/guardarUsuario/:id', controllerUsuarios.updateUsuario);





module.exports=rutas;

