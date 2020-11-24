const express=require('express');
const Restaurant =require('../Model/RestoList');
const {restaurantRules,validator}=require('../middleware/validatorRestaurant');
const Router=express.Router()


Router.post('/restoList',restaurantRules(),validator, exports.restoList =  async(req,res)=>{ 
    const {image, name, desc} = req.body;
try {
    const newRestaurant = new Restaurant({
        image,
        name,
        desc
    });
    await newRestaurant.save();
    res.status(201).json(newRestaurant)
} catch (error) {
    console.error(error)
    res.status(500).json({errors:error})
}
});
module.exports = Router;
