const express=require('express');
const {restaurantRules,validator}=require('../middleware/validatorRestaurant');
const {restoList,restoFind} =require('../controllers/restoList.controller');

const Router=express.Router()

Router.post('/restoList',restaurantRules(),validator, restoList);
Router.get('/restoList', restoFind); 
module.exports = Router;
