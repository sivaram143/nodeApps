var express = require('express');
var bodyParser = require('body-parser');
var routes = require('./routes');

var app = express();
// app.use(bodyParser.urlencoded({extended: true}));
// app.use(bodyParser.json);

app.use('/', routes);var pool;
pool = require('./connection').pool;

var server = app.listen(5000, function(){
  console.log("Server listening to the port"+server.address().port);
});
