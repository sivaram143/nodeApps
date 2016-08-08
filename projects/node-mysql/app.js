var express = require('express');
var bodyParser = require('body-parser');
var routes = require('./routes');
var fs = require('fs');
var path = require('path');
var morgan  = require('morgan');

var app = express();
// app.use(bodyParser.urlencoded({extended: true}));
// app.use(bodyParser.json);

// create a write stream (in append mode)
// log all requests to 'access.log' file
var accessLogStream = fs.createWriteStream(path.join(__dirname, 'access.log'), {flags: 'a'})

// http request logging
app.use(morgan('combined', {stream: accessLogStream}));

app.use('/', routes);var pool;
pool = require('./connection').pool;

var server = app.listen(5000, function(){
  console.log("Server listening to the port"+server.address().port);
});
