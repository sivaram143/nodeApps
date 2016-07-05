/* Usage: node queryItems.js */

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

console.log("Querying data starts name with 'S'");

// Conditions for querying items
// Todo: fixing the example
var params = {
    TableName : "Users",
    KeyConditionExpression: "#name = :name", // a string representing a constraint on the attribute
    ExpressionAttributeNames:{ // a map of substitutions for attribute names with special characters
        "#name": "S"
    },
    ExpressionAttributeValues: {  // a map of substitutions for all attribute values
        ":name":"S*"
    }
};

docClient.query(params, function(err, data) {
    if (err) {
        console.error("Unable to query. Error:", JSON.stringify(err, null, 2));
    } else {
        console.log("Query succeeded.");
        data.Items.forEach(function(item) {
            console.log(" -", item.name + ": " + item.age);
        });
    }
});
