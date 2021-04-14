const Joi = require('joi');

const id = Joi.object({
  id: Joi.number().required(),
});

const create = Joi.object({
  name: Joi.string().required(),
  price: Joi.number().min(0).required(),
  stock: Joi.number().min(1).required(),
  categoryId: Joi.number(),
  images: Joi.array()
    .items(
      Joi.object({
        mime: Joi.string().required(),
        name: Joi.string().required(),
      })
    )
    .required(),
});

const update = Joi.object({
  name: Joi.string(),
  price: Joi.number().min(0),
  stock: Joi.number().min(0),
  categoryId: [Joi.number(), null],
}).or('name', 'price', 'stock', 'categoryId');

module.exports = { id, create, update };
