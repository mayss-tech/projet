const mongoose=require('mongoose');

const restaurantSchema=mongoose.Schema({
    image: String,
    name: String,
    desc:String,
});
module.exports = Restaurant = mongoose.model('restaurant',restaurantSchema)