const mongoose=require('mongoose');

const menuSchema=mongoose.Schema({
    img: String,
    restoName:String,
    menuName: String,
    desc:String,
    price: String
});
module.exports = Menu = mongoose.model('menu',menuSchema)
