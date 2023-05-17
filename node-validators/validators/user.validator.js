const Joi = require("joi");
const roleEnum = ['engineer', 'superadmin', 'manager', 'user'];
const userObject = {
    first_name: Joi.string()
        .required(),
    
    role: Joi.string()
    .valid(...roleEnum)
    .required(),
}
const userSchema = Joi.object(userObject);

module.exports = userSchema