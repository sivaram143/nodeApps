/* Usage: node loadData.js */

/* importing aws-sdk module */
var AWS = require("aws-sdk");
var fs = require('fs');

// config params
AWS.config.update({
    region: "us-west-2",
    endpoint: "http://localhost:8000",
    accessKeyId:'dummyAccessKey',    
    secretAccessKey:'dummySecretKey'
});

var docClient = new AWS.DynamoDB.DocumentClient();

console.log("Importing users into DynamoDB. Please wait.");

var users = JSON.parse(fs.readFileSync('user.json', 'utf8'));
console.log("users", users);
users.forEach(function(user) {
    var params = {
        TableName: "Users",
        Item: {
            "age":  user.age,
            "name": user.name,
            "desg": user.desg,
            "skills":  user.skills
        }
    };

    docClient.put(params, function(err, data) {
       if (err) {
           console.error("Unable to add user", user.name, ". Error JSON:", JSON.stringify(err, null, 2));
       } else {
           console.log("PutItem succeeded:", user.name);
       }
    });
});
