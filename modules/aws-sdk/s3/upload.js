var req = require('request');
var AWS = require('aws-sdk');
var https = require('https');


AWS.config.update({
 accessKeyId: "XXXX",
 secretAccessKey: "XXXXXX"
});


var url = 'https://placeholdit.imgix.net/~text?txtsize=33&txt=350%C3%97150&w=350&h=150';


var bucket_name = 'my-upload-test';

handler = function (event, context) {
  console.log('Received event:');
  console.log(JSON.stringify(event, null, '  '));

  AWS.config.apiVersions = {
    s3: '2006-03-01',
  };

  var s3 = new AWS.S3({params: {Bucket: bucket_name, Key: "test.zip"}});
  var imageStream = https.get(url, { headers: { 'Connection': 'keep-alive' } }).on('response', function (response) {
    console.log("Response:"+response);
    if (200 == response.statusCode) {
      s3.upload({Body: response, CacheControl: "5184000"}, function (err, data) {
          if (err) console.log(err, err.stack); // an error occurred
          console.log('Uploaded file to S3 bucket.');
      });
    }
  });
};

handler();