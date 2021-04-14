const AWS = require('aws-sdk');

let s3 = new AWS.S3();

const getPresginedPutUrl = (Key, Bucket, mime) => {
  let url = s3.getSignedUrl('putObject', {
    Bucket,
    Key,
    Expires: 3000,
    ContentType: mime,
  });

  return url;
};

const getPresginedPutUrlByArray = (objects = []) => {
  let presginedsPutUrls = {};

  objects.forEach((object) => {
    presginedsPutUrls[object.name] = getPresginedPutUrl(
      object.name,
      'gonzabucket2021',
      object.mime
    );
  });

  return presginedsPutUrls;
};

module.exports = { getPresginedPutUrl, getPresginedPutUrlByArray };
