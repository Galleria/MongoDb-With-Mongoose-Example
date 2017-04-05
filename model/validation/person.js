var Joi = require('joi')

const person_validation = Joi.object().keys({
    name : Joi.string().required(),
    age : Joi.number(),
    sex : Joi.string().min(1).max(1).required()
})

module.exports = person_validation