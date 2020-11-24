const express=require('express');

const connectDB = require ('./Config/dbConnect');
const user=require('./Routes/user');
const restaurant=require('./Routes/restoList');
const menu=require('./Routes/menuList');
const addPartner=require('./Routes/partner');
const app=express();

app.use(express.json());
app.use('/user', user);
app.use('/restaurant', restaurant);
app.use('/menu', menu)
app.use('/addPartner',addPartner);

connectDB();

const PORT= process.env.PORT || 4000;
app.listen(PORT,err=> err ? console.error(error):console.log( `server is running on PORT ${PORT}`));