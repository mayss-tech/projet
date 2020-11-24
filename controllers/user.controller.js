// const bcrypt = require ('bcryptjs');
const User = require ('../Model/User');


exports.register = async (req,res)=>{
    const {name, telephone, email, password} = req.body;
    try {
        // const searchRes = await User.findOne({ email });
        // if (searchRes)
        // return res.status(401).json({ msg: `user already exists !!` });
        const newUser = new User({
            name,
            telephone,
            email, 
            password
        });
        await newUser.save()
        res.status(201).json(newUser)
    } catch (error) {
        console.error(error)
        res.status(500).json({errors:error})
    }
}