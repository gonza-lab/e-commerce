const Joi = require('joi');

const create = Joi.object({
  name: Joi.string().required(),
  price: Joi.number().min(0).required(),
  stock: Joi.number().min(1).required(),
});

module.exports = { create };
