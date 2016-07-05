/* To create test table and write data to test.json file */
/* Usage: node setup.js */

/* importing aws-sdk module */
var AWS = require("aws-sdk"),
    fs = require("fs");

var o, params, data;

// local db setup
AWS.config.update({
  region: "us-west-2",
  endpoint: "http://localhost:8000",
  accessKeyId:'dummyAccessKey',    
  secretAccessKey:'dummySecretKey'
});


var dynamodb = new AWS.DynamoDB();


// creates dummy data
data = [];
for (var i=0; i<1000; i++) {
    o = {
        id: "id" + i,
        name: "Object " + i
    };
    data.push(o);
}
fs.writeFileSync("./test.json", JSON.stringify(data, null, 4), {encoding: "utf8"});

// creates table with Hash key "id"
params = {
    TableName: 'test',
    KeySchema: [{ AttributeName: 'id', KeyType: 'HASH' }],
    AttributeDefinitions: [ { AttributeName: 'id', AttributeType: 'S' }, { AttributeName: 'name', AttributeType: 'S' }],
    ProvisionedThroughput: { ReadCapacityUnits: 1, WriteCapacityUnits: 5 }
};
dynamodb.createTable(params, function() {});