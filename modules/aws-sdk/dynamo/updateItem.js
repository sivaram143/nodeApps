/* Usage: node UpdateItem.js */

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

var age = 20;
var name = "Sivaram";

// Update the item, unconditionally,
var params = {
    TableName:table,
    Key:{
        "age": age,
        "name": name
    },
    UpdateExpression: "set age = :age",
    ExpressionAttributeValues:{
        ":age":"27"
    },
    ReturnValues:"UPDATED_NEW"
};

console.log("Updating the item...");
docClient.update(params, function(err, data) {
    if (err) {
        console.error("Unable to update item. Error JSON:", JSON.stringify(err, null, 2));
    } else {
        console.log("UpdateItem succeeded:", JSON.stringify(data, null, 2));
    }
});
