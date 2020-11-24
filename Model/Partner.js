const mongoose=require('mongoose');

const partnerSchema=mongoose.Schema({
    restoPartnerName: {
        type:String,
        required:true
    },
    partnerName: {
        type:String,
        required:true
    },
    phone:{
        type:Number,
        required:true},
    adress:String,
    email:{
        type:String,
        required:true
    }
});
module.exports = Partner = mongoose.model('partner',partnerSchema);