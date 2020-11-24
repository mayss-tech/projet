const express=require('express');
const {registerRules, loginRules,validator} = require ('../middleware/validatorUser');
const isAuth = require('../middleware/passport');
const Router = express.Router();
const {register,login,profile} =require ('../controllers/user.controller');


Router.post('/register',registerRules(),validator, register); 
Router.post('/login', loginRules(),validator, login); 
Router.get('/current', isAuth(), profile); 
module.exports = Router;