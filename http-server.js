/*
   Testing:
     1. node http-server.js
     2. Open browser and navigate URL 
        http://localhost:8080
             (or)
     1. CURL http://localhost:8080
*/

var http = require('http');

var server = http.createServer(function(req, res){
	res.writeHead(200);
	res.end("Welcome to Node");
});

server.listen(8080);
console.log("Server Lisenting to Port 8080");

