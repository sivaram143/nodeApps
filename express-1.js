/* 
 * Express is a minimal and flexible Node.js web application framework
 * Install: $ npm install express --save
 Testing:
   1. $ node welcome-express-server.js
   2. Open browser and navigate URL 
      http://localhost:5000
           (or)
   1. curl http://localhost:5000
*/

var express = require('express');
var app = express();

app.get('/', function (req, res) {
  res.send('Welcome to Express');
});

app.listen(5000, function () {
  console.log('app listening on port 5000!');
});





