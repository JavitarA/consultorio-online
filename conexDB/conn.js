/*var mongoose=require('mongoose');

// mongodb+srv://Javitar:<Amaterasu1>@cluster0.b5pto.mongodb.net/myFirstDatabase?retryWrites=true&w=majority
// mongodb://localhost:27017/consultoriobd
mongoose.connect("mongodb://localhost:27017/consultoriobd", 
async(err,res)=>{
    if(err){
        throw err;
    }else{
        console.log('La conexion a la base de datos fue correcta...')
}
});


module.exports = mongoose;*/

const mongoose=require('mongoose');

mongoose.connect("mongodb+srv://Javitar:Amaterasu1@cluster0.b5pto.mongodb.net/myFirstDatabase?retryWrites=true&w=majority", 
{
    useNewUrlParser: true,
    // useCreateIndex: true,
    useUnifiedTopology: true,
    // useFindAndModify: false
    },(err,res)=>{
        if(err){
        throw err;
        }else{
        console.log('La conexion a la base de datos fue correcta...')
}
});
module.exports = mongoose;