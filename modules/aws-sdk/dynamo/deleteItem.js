/* Usage: node DeleteItems.js */
// todo: debug
/* importing aws-sdk module */
var AWS = require("aws-sdk");

// config parameters
AWS.config.update({
  region: "us-west-2",
  endpoint: "http://localhost:8000",
  accessKeyId:'dummyAccessKey',    
  secretAccessKey:'dummySecretKey'
});

var docClient = new AWS.DynamoDB.DocumentClient();

var table = "Users";

var age = 25;
var name = "Sivaram";

var params = {
    TableName:table,
    Key:{
      "name": name,
      "age":age
    },
    ConditionExpression:"age <= :val",
    ExpressionAttributeValues: {
        ":val": 25
    }
};

console.log("Attempting a conditional delete...");
docClient.delete(params, function(err, data) {
    if (err) {
        console.error("Unable to delete item. Error JSON:", JSON.stringify(err, null, 2));
    } else {
        console.log("DeleteItem succeeded:", JSON.stringify(data, null, 2));
    }
});
