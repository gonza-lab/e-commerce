const Joi = require('joi');

const create = Joi.object({
  name: Joi.string().required(),
  father: Joi.number(),
});

const id = Joi.object({
  id: Joi.number().required(),
});

const update = Joi.object({
  name: Joi.string(),
  father: Joi.number(),
}).or('name', 'father');

module.exports = { create, update, id };
