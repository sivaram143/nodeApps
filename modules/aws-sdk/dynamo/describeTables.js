/* 
  Usage: node describeTable.js <tablename>
*/

/* importing aws-sdk module */
AWS = require("aws-sdk");

// config parameters
AWS.config.update({
  region: "us-west-2",
  endpoint: "http://localhost:8000",
  accessKeyId:'dummyAccessKey',    
  secretAccessKey:'dummySecretKey'
});

var dynamodb = new AWS.DynamoDB();
params = {};

// command line arguments checking
argList = process.argv
if(argList.length!=3){
  console.log("Please provide table name");
  console.log("Usage: node describeTable.js <tablename>");
  return;
}


tableName = argList[2];

var params = {
    TableName: tableName
};


dynamodb.describeTable(params, function(err, data) {
    if (err) {
        console.error("Unable to create table. Error JSON:", JSON.stringify(err, null, 2));
    } else {
        console.log("Describe Table:"+JSON.stringify(data));
    }
});
