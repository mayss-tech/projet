const {check, validationResult}= require('express-validator');

exports.registerRules=()=>[
    check('name', 'name field is required').notEmpty(),
    check('telephone', 'telephone field is required').notEmpty(),
    check('email', 'email field should be valid').isEmail(),
    check('email', 'email field is required').notEmpty(),
    check('password', 'password field is required').notEmpty(),
    check('adress', 'adress field is required').notEmpty()
];
exports.loginRules=()=>[
    check('email', 'email field should be valid').isEmail(),
    check('email', 'email field is required').notEmpty(),
    check('password', 'password field is required').notEmpty(),
];

exports.validator=(req,res,next)=>{
    const errors = validationResult(req);
    errors.isEmpty()? next(): res.status(400).json({errors:errors.array()});
}




