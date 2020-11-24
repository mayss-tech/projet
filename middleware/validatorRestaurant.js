const {check, validationResult}= require('express-validator');

exports.restaurantRules=()=>[
    check('image', 'image field is required').notEmpty(),
    check('name', 'name field is required').notEmpty(),
    check('desc', 'desc field is required').notEmpty()
];

exports.validator=(req,res,next)=>{
    const errors = validationResult(req);
    errors.isEmpty()? next(): res.status(400).json({errors:errors.array()});
}
