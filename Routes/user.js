const express=require('express');
const {registerRules, loginRules,validator} = require ('../middleware/validatorUser');
const User =require ('../Model/User');
const bcrypt = require ('bcryptjs');
const jwt = require ('jsonwebtoken');
const config=require('config');
const secretOrKey = config.get('secretOrKey')
const isAuth = require('../middleware/passport');
const Router = express.Router();

Router.post('/register',registerRules(),validator, exports.register = async (req,res)=>{ 
    const {name, telephone, email, password,adress, codePostal} = req.body;
try {
    const searchRes = await User.findOne({ email });
        if (searchRes)
        return res.status(401).json({ msg: 'user already exists' });
    const newUser = new User({
        name,
        telephone,
        email, 
        password,
        adress, 
        codePostal
    });
    const salt = await bcrypt.genSalt(10);
    const hash = await bcrypt.hash(password, salt);
    newUser.password=hash;
    await newUser.save()
    res.status(201).json(newUser)
} catch (error) {
    console.error(error)
    res.status(500).json({errors:error})
}
    
});

Router.post('/login', loginRules(),validator,exports.login = async(req,res)=>{
    const {email,password}=req.body
    try {
        const user = await User.findOne({email});
        if (!user) return res.status(404).json({ msg: 'email is invalid' });
        const isMatch = await bcrypt.compare(password,user.password);
        if (!isMatch) return res.status(404).json({ msg: 'password is invalid' });
        const payload= {
            id: user._id,
            name:user.name,
            telephone:user.telephone,
            email:user.email, 
            adress:user.adress, 
            codePostal:user.codePostal
        }
        const token = await jwt.sign(payload,secretOrKey);
        return res.status(200).json({token : `bearer ${token}` })
    } catch (error) {
        console.error(error)
        res.status(500).json({errors:error})
    }
});
Router.get('/current', isAuth(), exports.profile = async (req, res) => {
    console.log('req', req);
    res.json(req.user);
});
module.exports = Router;