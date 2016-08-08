var AWS = require('aws-sdk');
var request = require('request');


AWS.config.update({
 accessKeyId: "XXXXX",
 secretAccessKey: "XXXX"
});

var s3 = new AWS.S3();
var url = 'https://placeholdit.imgix.net/~text?txtsize=33&txt=350%C3%97150&w=350&h=150';

process.env['NODE_TLS_REJECT_UNAUTHORIZED'] = '0';

function put_from_url(url, bucket, key, callback) {
    request({
        url: url,
        encoding: null
    }, function(err, res, body) {
        if (err)
            return callback(err, res);

        s3.putObject({
            Bucket: bucket,
            Key: key,
            ContentType: res.headers['content-type'],
            ContentLength: res.headers['content-length'],
            Body: body // buffer
        }, callback);
    })
}



exports.handler = function (event, context) {
  put_from_url(url, 'my-upload-test','test.zip', function(err, res) {
      if (err)
          throw err;
      console.log('Uploaded successfully!');
  });
}

