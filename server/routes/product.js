const { Router } = require('express');
const product_controller = require('../controllers/product');
const product_schema = require('../joi/product');
const joi_validator = require('../middlewares/joiValidator');

const route = Router();

route.post(
  '/',
  joi_validator(product_schema.create, 'body'),
  product_controller.create
);
route.put(
  '/:id',
  joi_validator(product_schema.id, 'params'),
  joi_validator(product_schema.update, 'body'),
  product_controller.update
);
route.delete(
  '/:id',
  joi_validator(product_schema.id, 'params'),
  product_controller.delete
);
route.get(
  '/',
  product_controller.getAll,
)
route.get(
  '/:id',
  joi_validator(product_schema.id, 'params'),
  product_controller.getById,
)
route.post(
  '/:id/confirm-upload-images',
  joi_validator(product_schema.id, 'params'),
  joi_validator(product_schema.images, 'body'),
  product_controller.confirmUploadOfImagesInS3
);
route.post(
  '/:id/get-presgined-to-put-images',
  joi_validator(product_schema.id, 'params'),
  joi_validator(product_schema.getPresginedUrlToPutImages, 'body'),
  product_controller.getPresginedUrlToPutImage
);
route.delete(
  '/:id/image',
  joi_validator(product_schema.id, 'params'),
  joi_validator(product_schema.deleteImages, 'body'),
  product_controller.deleteImagesInS3AndDB
);

module.exports = route;
