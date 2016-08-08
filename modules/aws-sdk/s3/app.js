/* Usage: node app.js */

/* importing aws-sdk module */
var AWS = require("aws-sdk");
var async = require('async');

AWS.config.update({
    accessKeyId: process.env.AWS_ACCESS_KEY_ID, 
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY, 
    region: process.env.AWS_REGION or 'us-east-1'
});

var s3 = new AWS.S3();

// passing bucket name from command line argument 
argv = process.argv
bucketName = argv[2];

if(!bucketName){
  console.log("Please pass the bucket name as argument");
  return;
}


// Create an S3 bucket named myBucket
function createBucket(callback) {
    s3.createBucket({Bucket: bucketName}, function(err, data) {
        if (err){
          console.log(err, err.stack); // error 
        }
        else{
          console.log("==>>>> Bucket Creation <<<<==");
          console.log("Bucket Successfully Created."); // success
          callback(null, 'create');
        }
          
    });
}

// list existing buckets
function listBuckets(callback) {
    s3.listBuckets(function(err, data) {
        if (err){
          console.log(err, err.stack); // an error occurred
        } 
        else {
          console.log("==>>>> List Buckets <<<<==");
          for (var index in data.Buckets) {
            var bucket = data.Buckets[index];
            callback(null, bucket);
            //console.log("Bucket: ", bucket.Name, ' : ', bucket.CreationDate);
          }
        }
    });
}

// puts the body inside the object 'myKey' of bucket 'Bucket'
function insertObject() {
    var putparams = {Bucket: bucketName , Key: 'my-key', Body: 'Welcome to s3!'};
    s3.putObject(putparams, function(err, data) {
        if (err){
          console.log(err); // error 
        }
        else{
          console.log("==>>>> Put object to Bucket <<<<==");
          console.log("Successfully uploaded data");    // success 
        }
    });
}

// read Object from bucket
function readObject() {
    var getparams = {Bucket: bucketName, Key: 'my-key'};
    s3.getObject(getparams, function (err, data) {
        if (err){
          console.log(err); // error
        }
        else{
          console.log("==>>>> Get Object from Bucket <<<<==");
          console.log("The key is:", data.Body.toString()); // success 
        }
    });
}

// delete Object from the bucket
function deleteObject() {
    var delparams = {Bucket: bucketName , Key: 'my-key'};
    s3.deleteObject(delparams, function(err, data) {
        if (err){ 
          console.log(err, err.stack); // error
        }
        else{
          console.log("==>>>> Deleting Object from Bucket <<<<==");
          console.log(data); // success 
        }   
    });
}

// delete the bucket
function deleteBucket(callback){
    s3.deleteBucket({Bucket: bucketName}, function (err, data) {
        if (err){
          console.log("error deleting bucket " + err);
        }
        else{
          console.log("==>>>> Deleting Bucket <<<<==");
          callback(null, JSON.stringify(data));
          //console.log("delete the bucket " + JSON.stringify(data));
        }
    });
}

// calling methods via async
// async.waterfall([
//     listBuckets();
//     createBucket();
//     insertObject();
//     readObject();
//     deleteObject();
//     deleteBucket();

// calling methods via async series
async.series([
  createBucket,
  ,
  deleteBucket
], function (error) {
    if (error) {
        console.log("error"+error);
    }
});


//REf: http://docs.aws.amazon.com/AWSJavaScriptSDK/guide/node-examples.html