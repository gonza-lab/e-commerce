const Joi = require('joi');

const create = Joi.object({
  name: Joi.string().required(),
  father: Joi.number(),
});

module.exports = { create };
