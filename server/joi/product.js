const Joi = require('joi');

const id = Joi.object({
  id: Joi.number().required(),
});

const images = Joi.object({
  images: Joi.array()
    .items(
      Joi.object({
        mime: Joi.string().required(),
        name: Joi.string().required(),
      })
    )
    .required(),
});

const create = Joi.object({
  name: Joi.string().required(),
  price: Joi.number().min(0).required(),
  stock: Joi.number().min(1).required(),
  categoryId: Joi.number(),
});

const update = Joi.object({
  name: Joi.string(),
  price: Joi.number().min(0),
  stock: Joi.number().min(0),
  categoryId: [Joi.number(), null],
}).or('name', 'price', 'stock', 'categoryId');

const getPresginedUrlToPutImages = Joi.object({
  upload: Joi.array()
    .items(
      Joi.object({
        mime: Joi.string().required(),
        name: Joi.string().required(),
      })
    )
    .required(),
});

const deleteImages = Joi.object({
  delete: Joi.array()
    .items(
      Joi.object({
        name: Joi.string().required(),
      })
    )
    .required(),
});

module.exports = {
  id,
  create,
  update,
  images,
  getPresginedUrlToPutImages,
  deleteImages,
};
