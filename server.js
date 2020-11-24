const express=require('express');

const connectDB = require ('./Config/dbConnect');
const user=require('./Routes/user');
const restaurant=require('./Routes/restoList');
const app=express();

app.use(express.json());
app.use('/user', user);

app.use('/restaurant', restaurant);

connectDB();


const PORT= process.env.PORT || 4000;
app.listen(PORT,err=> err ? console.error(error):console.log( `server is running on PORT ${PORT}`));