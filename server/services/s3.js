const AWS = require('aws-sdk');

let s3 = new AWS.S3();

const getPresginedPutUrl = (Key, Bucket) => {
  let url = s3.getSignedUrl('putObject', {
    Bucket,
    Key,
    Expires: 30,
  });

  return url;
};

module.exports = { getPresginedPutUrl };
