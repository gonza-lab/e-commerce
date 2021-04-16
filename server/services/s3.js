const AWS = require('aws-sdk');

let s3 = new AWS.S3();

const getPresginedPutUrl = (Key, Bucket, mime) => {
  let url = s3.getSignedUrl('putObject', {
    Bucket,
    Key,
    Expires: +process.env.AWS_S3_PRESIGNED_EXPIRATION,
    ContentType: mime,
  });

  return url;
};

const getPresginedPutUrlByArray = (objects = []) => {
  let presginedsPutUrls = {};

  objects.forEach((object) => {
    presginedsPutUrls[object.name] = getPresginedPutUrl(
      object.name,
      process.env.AWS_S3_BUCKET,
      object.mime
    );
  });

  return presginedsPutUrls;
};

const getHeadObject = (Key, Bucket) => {
  return new Promise((resolve, reject) => {
    s3.headObject({ Bucket, Key }, (err, data) => {
      if (err) reject(err);
      else resolve(data);
    });
  });
};

const deleteObject = (Key, Bucket) => {
  return new Promise((resolve, reject) => {
    s3.deleteObject({ Key, Bucket }, (err, data) => {
      if (err) {
        reject(err);
      } else {
        resolve(data);
      }
    });
  });
};

const deleteObjectsByArray = (objects = []) => {
  objects.forEach(
    async (object) => await deleteObject(object.Key, process.env.AWS_S3_BUCKET)
  );
};

module.exports = {
  getPresginedPutUrl,
  getPresginedPutUrlByArray,
  getHeadObject,
  deleteObject,
  deleteObjectsByArray,
};
