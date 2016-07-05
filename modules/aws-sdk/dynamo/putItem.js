/* Usage: node putItem.js */

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

// sample data
var name = "Sivaram";
var age = 26;
var desg = "Software Engineer";
var skills = ["JavaScript", "AWS", "Devops"];

var params = {
    TableName:table,
    Item:{
        "name": name,
        "age": age,
        "desg": desg,
        "skills":skills
    }
};

// adding item
docClient.put(params, function(err, data) {
    if (err) {
        console.error("Unable to add item. Error JSON:", JSON.stringify(err, null, 2));
    } else {
        console.log("Added item:", JSON.stringify(data, null, 2));
    }
});
