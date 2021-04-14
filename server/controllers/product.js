const { request, response } = require('express');
const product_service = require('../services/product');
const s3_service = require('../services/s3');

const create = async (req = request, res = response, next) => {
  try {
    let data = await product_service.create(req.body);
    let presginedUrls = await s3_service.getPresginedPutUrlByArray(
      req.body.images.map((img) => ({
        name: `product/${data.id}/${img.name}`,
        mime: img.mime,
      }))
    );

    res.status(201).json({
      ok: true,
      data,
      'presgined-urls': presginedUrls,
    });
  } catch (error) {
    console.log(error);
    next(error);
  }
};

const update = async (req = request, res = response, next) => {
  try {
    let data = await product_service.update(req.body, req.params.id);

    res.status(200).json({
      ok: true,
      data,
    });
  } catch (error) {
    next(error);
  }
};

const remove = async (req = request, res = response, next) => {
  try {
    await product_service.delete(req.params.id);

    res.status(200).json({
      ok: true,
    });
  } catch (error) {
    next(error);
  }
};

module.exports = { create, update, delete: remove };
