var  Mongoose  = require("../conexDB/conn");
var medicos = require("../Models/medicos");

function prueba(req,res){
    res.status(200).send({
        
        message:'=>probando una accion <='
    });
}


function saveMedico(req,res){
    var miMedico = new medicos(req.body);
    miMedico.save((err,result)=>{
        res.status(200).send({message:result});
    });
}



function buscarData(req,res){
    var idMedico=req.params.id;
    medicos.findById(idMedico).exec((err,result)=>{
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
    var idMedico=req.params.idb;
    if (!idMedico){
        var result=Usuarios.find({}).sort('nombre');
        }else{
            var result=Usuarios.find({_id:idMedico});  //.sort('nombre') el profe le quito esto
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
    })
}


function updateMedico(req,res){
    var id = mongoose.Types.ObjectId(req.query.productId);
    medicos.findOneAndUpdate({_id:id},req.body,{new:true},function(err,medicos){
        if(err)
        res.send(err);
        res.json(medicos);
    });
}

function DeleteMedico(req,res){
    var idMedico=req.params.id;
    medicos.findByIdAndRemove(idMedico,function(err, medicos){
        if (err){
            return res.json(500,{message:'No hemos encontrado al usuario'})
        }
        return res.json(medicos)
    });
}


module.exports={
    prueba,
    saveMedico, 
    buscarData,
    listarAllData,
    updateMedico,
    DeleteMedico
}


