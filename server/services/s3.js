const AWS = require('aws-sdk');

let s3 = new AWS.S3();

const getPresginedPutUrl = (Key, Bucket, mime) => {
  let url = s3.getSignedUrl('putObject', {
    Bucket,
    Key,
    Expires: process.env.AWS_S3_PRESIGNED_EXPIRATION,
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

const objectExists = (Key, Bucket) => {
  return new Promise((resolve, reject) => {
    s3.headObject({ Bucket, Key }, (err, data) => {
      if (err) reject(err);
      else resolve(data);
    });
  });
};

module.exports = {
  getPresginedPutUrl,
  getPresginedPutUrlByArray,
  objectExists,
};
