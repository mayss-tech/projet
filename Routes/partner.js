const express=require('express');
const {register_partnerRules,validator}=require('../middleware/validatorPartner');
const {registerPartner } =require('../controllers/partner.controller');

const Router=express.Router()


Router.post('/partner',register_partnerRules(),validator, registerPartner);

module.exports = Router;
