/*
   Testing:
     1. node http-server.js
     2. Open browser and navigate URL
        http://localhost:3000
             (or)
     1. CURL http://localhost:3000
*/

var http = require('http');

var PORT = process.env.PORT || 3000;

var server = http.createServer(function(req, res){
	res.writeHead(200, {"Content-Type": "text/html"});
	res.write('<!DOCTYPE html>'+
	'<html>'+
	' <head>'+
	' <meta charset="utf-8" />'+
	' <title>My Node.js page!</title>'+
	' </head>'+
	' <body>'+
	' <p>Here is a paragraph of <strong>HTML</strong>!</p>'+
	' </body>'+
	'</html>');
	res.end();
});

server.listen(PORT);
console.log("Server Lisenting to Port 3000");
