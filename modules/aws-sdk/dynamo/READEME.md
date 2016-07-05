## DynamoDB

### Local Setup
  1. [Install Java](https://java.com/en/download/linux_manual.jsp)
  2. Download the DynamoDB latest version
    - [tar.gz format]( http://dynamodb-local.s3-website-us-west-2.amazonaws.com/dynamodb_local_latest.tar.gz)
    - [zip format]( http://dynamodb-local.s3-website-us-west-2.amazonaws.com/dynamodb_local_latest.zip)

  3. Extract the contents and copy the extracted directory to a location of your choice.

  4. To start DynamoDB, open a command prompt window, navigate to the directory where you extracted DynamoDBLocal.jar
    ```
    java -Djava.library.path=./DynamoDBLocal_lib -jar DynamoDBLocal.jar -sharedDb
    Help: java -Djava.library.path=./DynamoDBLocal_lib -jar DynamoDBLocal.jar -help
    ```

  5. Access the built-in JavaScript shell.
     `http://localhost:8000/shell`
  6. Export the following environemnt variables in scripts/setup
    
    ```
    export AWS_ACCESS_KEY_ID="dummyAccessKey"
    export AWS_SECRET_ACCESS_KEY="dummySecretKey"
    export AWS_REGION="us-west-2"
    export AWS_ENDPOINT="http://localhost:8000"
    ```
    
### Terminology

### Dynamo Operations

  - CreateTable
  - DescribeTable
  - ListTables
  - PutItem
  - GetItem
  - Querying
  - Scaning
  - UpdateItem
  - DeleteItem
  - DeleteTable
  - Batch Operations (dynamo-streams)

### References
- http://docs.aws.amazon.com/amazondynamodb/latest/APIReference/Welcome.html
- http://serebrov.github.io/html/2015-02-01-dynamodb-local.html
