const express=require('express');
// const {check, validationResult}= require('express-validator');
const {menuList,menuFind}=require('../controllers/menuList.controller');

const Router =express.Router();

Router.post('/menuList', menuList );
Router.get('/menuList', menuFind );
module.exports = Router;