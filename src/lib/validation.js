import Joi from 'joi'

let registerValidation = Joi.object({
    first_name: Joi.string().alphanum().min(3).max(30).required(),
    last_name: Joi.string().alphanum().min(3).max(30).required(),
    password: Joi.string().min(8).pattern( new RegExp('^[a-zA-Z0-9]{3,30}$') ).required(),
    email: Joi.string().email({ tlds: { allow: false } }),
    specialist: Joi.string()
})

let loginValidation = Joi.object({
    email: Joi.string().email({ tlds: { allow: false } }),
    password: Joi.string().min(8).required()
})


export {
    registerValidation,
    loginValidation
}