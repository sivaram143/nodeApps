var http = require("http");
var url = require('url');
var fs = require('fs');

var server = http.createServer(function(request, response){ 
    console.log('Connection');
    var path = url.parse(request.url).pathname;
    console.log(1);
    switch(path){
        case '/':
            response.writeHead(200, {'Content-Type': 'text/html'}); 
            response.write('hello world');
            break;
        case '/socket.html':
            console.log(2);
            fs.readFile(__dirname + path, function(error, data){
                if (error){
                    response.writeHead(404);
                    response.write("opps this doesn't exist - 404");
                    console.log(3);
                }
                else{
                    response.writeHead(200, {"Content-Type": "text/html"});
                    response.write(data, "utf8");
                    console.log(4);
                }
            });
            break;
        default:
            response.writeHead(404);
            response.write("opps this doesn't exist - 404");
            break;
    }
    console.log(5);
    response.end(); 
}); 