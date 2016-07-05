/* 
  Usage: node deleteTable.js <tablename>
*/

// importing aws-sdk module 
var AWS = require("aws-sdk");

// config parameters
AWS.config.update({
  region: "us-west-2",
  endpoint: "http://localhost:8000",
  accessKeyId:'dummyAccessKey',    
  secretAccessKey:'dummySecretKey'
});

// command line arguments checking
argList = process.argv
if(argList.length!=3){
  console.log("Please provide table name");
  console.log("Usage: node deleteTable.js <tablename>");
  return;
}

tableName = argList[2];

var dynamodb = new AWS.DynamoDB();

// passing table name as cmd argument
var params = {
    TableName : tableName
};

// deleting the table
dynamodb.deleteTable(params, function(err, data) {
    if (err) {
        console.error("Unable to delete table. Error JSON:", JSON.stringify(err, null, 2));
    } else {
        console.log("Deleted table", JSON.stringify(data, null, 2));
    }
});
