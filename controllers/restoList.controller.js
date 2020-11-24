
const Restaurant = require ('../Model/RestoList');

exports.restoList =  async(req,res)=>{ 
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
};
exports.restoFind = async(req,res)=>{
    try {
        const restaurant = await Restaurant.aggregate(pipeline=[
            {
                $lookup:{
                    from:"menu",
                    localField :"name",
                    foreignField:"restoName",
                    as:"MENU_RESTAURANT",
                    pipeline:[$match ={$expr:{$eq:["name","restoName"]}}]
                }
            }

        ]);
        res.status(201).json(restaurant)
    } catch (error) {
        console.error(error)
        res.status(500).json({errors:error})
    }}