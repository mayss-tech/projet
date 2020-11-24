const Partner = require ('../Model/Partner');
exports.registerPartner = async (req,res)=>{ 
    const {restoPartnerName, partnerName, phone,adress,email} = req.body;
try {
    const newPartner = new Partner({
        restoPartnerName,
        partnerName,
        phone, 
        adress,
        email
    });
    await newPartner.save();
    res.status(201).json(newPartner);
} catch (error) {
    console.error(error)
    res.status(500).json({errors:error})
}
};