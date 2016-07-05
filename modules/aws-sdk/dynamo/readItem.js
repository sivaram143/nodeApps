/* Usage: node readItems.js */

/* importing aws-sdk module */
var AWS = require("aws-sdk");

// config params
AWS.config.update({
  region: "us-west-2",
  endpoint: "http://localhost:8000",
  accessKeyId:'dummyAccessKey',    
  secretAccessKey:'dummySecretKey'
});

var docClient = new AWS.DynamoDB.DocumentClient()

var table = "Users";

var age = 26;
var name = "Sivaram";

var params = {
    TableName: table,
    Key:{
        "age": age,
        "name": name
    }
};

docClient.get(params, function(err, data) {
    console.log("data........."+JSON.stringify(data));
    if (err) {
        console.error("Unable to read item. Error JSON:", JSON.stringify(err, null, 2));
    } else {
        console.log("GetItem succeeded:", JSON.stringify(data, null, 2));
    }
});
