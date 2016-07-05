/* Usage: node createTable.js */

/* importing aws-sdk module */
var AWS = require("aws-sdk");

// config parameters
AWS.config.update({
  region: "us-west-2",
  endpoint: "http://localhost:8000",
  accessKeyId:'dummyAccessKey',    
  secretAccessKey:'dummySecretKey'
});

var dynamodb = new AWS.DynamoDB();

var params = {
    // name of the table to create.
    TableName : "Users",
    // Specifies the attributes that make up the primary key for a table or an index.
    // Required HASH type attribute, optional second RANGE.
    KeySchema: [       
        { AttributeName: "name", KeyType: "HASH"},  //Partition/ Hash Key
        { AttributeName: "age", KeyType: "RANGE" }  //Sort key
    ],
    //describe the key schema for the table and indexes.
    AttributeDefinitions: [       
        { AttributeName: "name", AttributeType: "S" }, // (S | N | B) for string, number, binary
        { AttributeName: "age", AttributeType: "N" },
        { AttributeName: "desg", AttributeType: "S" }
    ],
    GlobalSecondaryIndexes: [ // optional
        {
            IndexName: "desg",
            KeySchema: [       
                { AttributeName: "desg", KeyType: "HASH"}  //Partition key
            ],
            Projection:{
                ProjectionType: 'ALL' // (ALL | KEYS_ONLY | INCLUDE)
            },
            ProvisionedThroughput: { 
                ReadCapacityUnits: 10, 
                WriteCapacityUnits: 10
            }
        }
    ],
    // throughput to provision to the index
    ProvisionedThroughput: {       
        ReadCapacityUnits: 10, 
        WriteCapacityUnits: 10
    }
};

// creating table
dynamodb.createTable(params, function(err, data) {
    if (err) {
        console.error("Unable to create table. Error JSON:", JSON.stringify(err, null, 2));
    } else {
        console.log("Created table. Table description JSON:", JSON.stringify(data, null, 2));
    }
});
