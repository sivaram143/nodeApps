var express = require('express');
var bodyParser = require("body-parser");
var app = express();
app.use(bodyParser.urlencoded());
app.use(bodyParser.json());
var router = express.Router();

router.get('/', function(req,res){
 res.json({"error": false,"message": "Hello !"});
});

router.post('/add', function(req,res){
 res.json({"error":false, "message": "success", "data": req.body.num1 + req.body.num2});
});

app.use('/', router);

app.listen(5000,function(){
 console.log("I am listening at PORT 5000");
});

/*
   Testing:

   GET : CURL http://localhost:5000
   POST: CURL -X POST -data

   mocha : Unit Testing
 
*/
