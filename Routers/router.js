const { Router } = require('express');
const router= Router();



var controllerUsuarios = require('../Controllers/ControllerUsuarios');
router.get('/prueba',controllerUsuarios.prueba);
router.post('/crear',controllerUsuarios.saveUsuarios);
router.get('/buscar/:id',controllerUsuarios.buscarData);
router.get('buscarTodo/:id?',controllerUsuarios.listarAllData);
router.delete('/borrarUsuario/:id',controllerUsuarios.DeleteUsuario);
router.put('/guardarUsuario/:id',controllerUsuarios.updateUsuario);
module.exports=router;

