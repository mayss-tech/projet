const mongoose=require('mongoose');

const userSchema=mongoose.Schema({
    name:{
        type: String,
        required:true
    },
    telephone:{
        type:Number,
        required:true
    },
    email:{
        type: String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    adress:String,
    codePostal:Number
});
module.exports = User = mongoose.model('user',userSchema)