const { request, response } = require('express');
const product_service = require('../services/product.js');
const s3_service = require('../services/s3.js');

const create = async (req = request, res = response, next) => {
  try {
    let data = await product_service.create(req.body);

    res.status(201).json({
      ok: true,
      data,
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
    console.log(error)
    next(error);
  }
};

const getAll = async (req = request, res = response, next) => {
  try {
    let data = await product_service.getAll();

    res.status(200).json({
      ok: true,
      data,
    });
  } catch(error){
    console.log(error);
    next(error);
  }
}

const getById = async (req = request, res = response, next) => {
  try {
    let data = await product_service.getById(req.params.id);

    res.status(200).json({
      ok: true,
      data,
    });
  } catch(error) {
    next(error);
  }
}

const getPresginedUrlToPutImage = async (
  req = request,
  res = response,
  next
) => {
  try {
    const { id } = req.params;
    await product_service.exists(id);

    let upload = await s3_service.getPresginedPutUrlByArray(
      req.body.upload.map((img) => ({
        name: `product/${id}/${img.name}`,
        mime: img.mime,
      }))
    );

    res.status(200).json({ ok: true, 'presgined-urls': upload });
  } catch (error) {
    console.log(error);
    next(error);
  }
};

const confirmUploadOfImagesInS3 = async (
  req = request,
  res = response,
  next
) => {
  try {
    const uploaded = await product_service.confirmUploadOfImagesInS3(
      req.body.images,
      req.params.id
    );

    res.status(200).json({ ok: true, uploaded });
  } catch (error) {
    console.log(error);
    next(error);
  }
};

const deleteImagesInS3AndDB = async (req = request, res = response, next) => {
  try {
    await product_service.deleteImagesFromS3AndDB(
      req.body.delete,
      req.params.id
    );

    res.status(200).json({ ok: true });
  } catch (error) {
    next(error);
  }
};

const buy = async (req = request, res = response, next) => {
  try {
    let data = await product_service.buy(req.body.quantity, req.params.id);

    res.status(200).json({ 
      ok: true,
      data,
    });
  } catch(error) {
    next(error);
  }
}

module.exports = {
  create,
  update,
  delete: remove,
  getAll,
  getById,
  confirmUploadOfImagesInS3,
  getPresginedUrlToPutImage,
  deleteImagesInS3AndDB,
  buy,
};
