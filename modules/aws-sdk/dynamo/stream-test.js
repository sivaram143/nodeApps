/* Usage: node stream-test.js */
// TBD

/* importing modules */
var AWS = require("aws-sdk"),
    dynamostreams = require("dynamo-streams"),
    fs = require("fs"),
    JSONStream = require("JSONStream");

// local db setup
AWS.config.update({
  region: "us-west-2",
  endpoint: "http://localhost:8000",
  accessKeyId:'dummyAccessKey',    
  secretAccessKey:'dummySecretKey'
});


var dynamodb = new AWS.DynamoDB();

var dbStreams = dynamostreams(dynamodb);

var jsonfile = "test.json";

fs.createReadStream(jsonfile, {encoding: "utf8"})
.pipe(JSONStream.parse("*"))
.pipe(dbStreams.createPutStream({TableName: "test"}));