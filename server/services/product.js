const sequelize = require('sequelize');
const category_service = require('./category');
const { Product, Image, Category, Purchase } = require('../models');
const errors = require('../errors/errors');
const s3_service = require('./s3');

const queryOfGet = {
  attributes: {
    include: [[sequelize.fn('COUNT', sequelize.col('Purchases.productId')), 'purchases']]
  },
  include: [
    { model: Purchase, attributes: []},
    Image,
    Category,
  ],
  group: ['Product.id']
}

const exists = async (id) => {
  let productDB = await Product.findOne({ ...queryOfGet, where: { id } });

  if (!productDB)
    throw new errors.NotFound('Not Found: Sent product cannot be found.');

  return productDB;
};

const create = async ({ name, price, stock }) => {
  let productDB = await Product.create({ name, price, stock });

  return productDB.dataValues;
};

const update = async ({ name, price, stock, categoryId }, id) => {
  await exists(id);
  if (categoryId) await category_service.exists(categoryId);

  await Product.update({ name, price, stock, categoryId }, { where: { id } });
  let productDB = (await Product.findOne({ ...queryOfGet, where: { id } })).dataValues;

  return productDB;
};

const remove = async (id) => {
  const productDB = await exists(id);

  let imagesDB = await productDB.getImages();
  await deleteImagesFromS3AndDB(
    imagesDB.map(({ dataValues }) => ({
      name: dataValues.name,
    })),
    id
  );

  await Product.destroy({ where: { id } });
};

const getAll = async () => {
  return await Product.findAll({ 
    ...queryOfGet,
  })
};

const getById = async (id) => {
  await exists(id);
  return await Product.findOne({ 
    ...queryOfGet,
    where: { id },
  })
};

const confirmUploadOfImagesInS3 = async (images, id) => {
  let productDB = await exists(id);
  const uploaded = [];

  for (const image in images) {
    let existsImgInS3 = true;

    try {
      await s3_service.getHeadObject(
        `product/${id}/${images[image].name}`,
        process.env.AWS_S3_BUCKET
      );
    } catch (error) {
      existsImgInS3 = false;
    }

    if (existsImgInS3) {
      const name = images[image].name;
      const mime = images[image].mime;
      const url = `https://${process.env.AWS_S3_BUCKET}.s3-${process.env.AWS_REGION}.amazonaws.com/product/${id}/${name}`;

      let imageDB = await Image.findOne({ where: { url, mime, name } });

      if (!imageDB) {
        await productDB.createImage({ url, mime, name });
      }

      uploaded.push({ ...images[image], url });
    }
  }

  return uploaded;
};

const deleteImagesFromS3AndDB = async (images = [], id) => {
  await exists(id);

  images.forEach(async (image) => {
    let existsObject = true;
    let Key = `product/${id}/${image.name}`;
    let Bucket = process.env.AWS_S3_BUCKET;

    try {
      await s3_service.getHeadObject(Key, Bucket);
    } catch (error) {
      existsObject = false;
    }

    if (existsObject) {
      await s3_service.deleteObject(Key, Bucket);

      await Image.destroy({
        where: {
          url: `https://${process.env.AWS_S3_BUCKET}.s3-${process.env.AWS_REGION}.amazonaws.com/${Key}`,
        },
      });
    }
  });
};

const buy = async (quantity, id) => {
  let productDB = (await exists(id)).dataValues;

  if(productDB.stock < quantity) {
    throw new errors.BadRequest(
      'InsufficientStock: The quantity to be purchased exceeds the available stock.'
    )
  };

  await Product.update({ stock: productDB.stock - quantity }, { where: { id } });
  await Purchase.create({ quantity, productId: id });
}

module.exports = {
  create,
  update,
  delete: remove,
  getAll,
  getById,
  confirmUploadOfImagesInS3,
  exists,
  deleteImagesFromS3AndDB,
  buy
};
