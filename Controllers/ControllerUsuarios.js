var { Mongoose } = require("mongoose");
var Usuarios = require("../Models/usuarios");

function prueba(req,res){
    res.status(200).send({
        message:'=>probando una accion <='
    });
}


function saveUsuarios(req,res){
    var miUsuario = new Usuarios(req.body);
    miUsuario.save((err,result)=>{
        res.status(200).send({message:result});
    });
}



function buscarData(req,res){
    var idUsuario=req.params.id;
    Usuarios.findById(idUsuario).exec((err,result)=>{
        if(err){
            res.status(500).send({message:'el Registro de buscar no se encuentra disponible al momento de ejecutar la solicitud'});
                    }else{
                        if(!result){
                            res.status(404).send({message:'El registro a buscar no se encuentra disponible'});
                        }else{
                            res.status(200).send({result});
                        }
                    }
    });
}


function listarAllData(req,res){
    var idUsuario=req.params.idb;
    if (!idUsuario){
        var result=Usuarios.find({}).sort('nombre');
        }else{
            var result=Usuarios.find({_id:idUsuario});  //.sort('nombre') el profe le quito esto
        }
   
    result.exec(function(err,result){
        if (err){
            res.status(500).send({message:'Error al momento de ejecutar la solicitud'});
        }else{
            if(!result){
                res.status(404).send({message:'El registro a buscar no se encuentra disponible'});
            }else{
                res.status(200).sent({result});
            }
        }
    });    
}


function updateUsuario(req,res){
    var id = mongoose.Types.ObjectId(req.query.productId);
    Usuarios.findOneAndUpdate({_id:id},req.body,{new:true},function(err,Usuarios){
        if(err)
        res.send(err);
        res.json(Usuarios);
    });
}

function DeleteUsuario(req,res){
    var idUsuario=req.params.id;
    Usuarios.findByIdAndRemove(id,function(err, usuarios){
        if (err){
            return res.json(500,{message:'No hemos encontrado al usuario'})
        }
        return res.json(usuario)
    });
}


module.exports={
    prueba,
    saveUsuarios, 
    buscarData,
    listarAllData,
    updateUsuario,
    DeleteUsuario
}


