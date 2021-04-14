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

module.exports = { getPresginedPutUrl, getPresginedPutUrlByArray };
