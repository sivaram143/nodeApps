/* Usage: node scanTable.js */

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

var params = {
    TableName: "Users",
    ProjectionExpression: "#age, #name, skills",
    FilterExpression: "#age between :start_age and :end_age",
    ExpressionAttributeNames: {
        "#age": "age",
        "#name": "name"
    },
    ExpressionAttributeValues: {
         ":start_age": 23,
         ":end_age": 28  
    }
};

console.log("Scanning Users table.");
docClient.scan(params, onScan);

function onScan(err, data) {
    if (err) {
        console.error("Unable to scan the table. Error JSON:", JSON.stringify(err, null, 2));
    } else {
        // print all the users
        console.log("Scan succeeded.");
        data.Items.forEach(function(user) {
          console.log(user.name + "=>", user.age + "=>"+user.skills);
        });

        // continue scanning if we have more movies
        if (typeof data.LastEvaluatedKey != "undefined") {
            console.log("Scanning for more...");
            params.ExclusiveStartKey = data.LastEvaluatedKey;
            docClient.scan(params, onScan);
        }
    }
}
