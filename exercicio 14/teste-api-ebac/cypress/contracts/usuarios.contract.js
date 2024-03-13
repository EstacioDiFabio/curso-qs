const Joi = require ('joi')

const usuarioSchema = Joi.object({
    quantidade: Joi.number(), 
    usuarios: Joi.array().items({
        _id: Joi.string(),
        nome: Joi.string(),
        email: Joi.string(),
        password: Joi.string(),
        administrador: Joi.string()
    })
})
export default usuarioSchema;