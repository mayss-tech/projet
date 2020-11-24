const Menu = require ('../Model/MenuList')
exports.menuList = async(req,res)=>{
    const {img, restoName, menuName ,desc, price} = req.body;
    try {
        const newMenu = await new Menu({
            img,
            restoName,
            menuName,
            desc,
            price
        })
        await newMenu.save();
        res.status(201).json(newMenu);
    } catch (error) {
        console.error(error)
        res.status(500).json({errors:error})
    }
};

exports.menuFind = async(req,res)=>{
    try {
        const menu = await Menu.find();
        res.status(201).json(menu)
    } catch (error) {
        console.error(error)
        res.status(500).json({errors:error})
    } 
};

