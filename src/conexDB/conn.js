const mongoose=require('mongoose');
//mongodb://localhost:27017/consultoriobd
// mongodb+srv://Javitar:<Amaterasu1>@cluster0.b5pto.mongodb.net/myFirstDatabase?retryWrites=true&w=majority
mongoose
.connect("mongodb://localhost:27017/consultoriobd", {
    useNewUrlParser:true,
    useCreateIndex:true,
    useUnifiedTopology:true,
    useFindAndModify:false,
},(err,res)=>{
        if(err){
            throw err;
        }else{
            console.log('La conexion a la base de datos fue correcta...')}
})

module.exports = mongoose;