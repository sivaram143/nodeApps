/*  tcp server 
    connect with a tcp client from the command line using netcat, the *nix 
    utility for reading and writing across tcp/udp network connections.
    $ node echo-server.js (server)
    $ netcat 127.0.0.1 5000 (client)
*/

// Use strict compilation rules 
'use strict';

var net = require('net');

var server = net.createServer(function(socket) {
	socket.write('Echo server\r\n');
	socket.pipe(socket);
});

server.listen(5000, '127.0.0.1');

/* tcp client 
Ref: http://www.hacksparrow.com/tcp-socket-programming-in-node-js.html.) */

var net = require('net');

var client = new net.Socket();
client.connect(5000, '127.0.0.1', function() {
	console.log('Connected');
	client.write('Hello, server! Love, Client.');
});

client.on('data', function(data) {
	console.log('Received: ' + data);
	client.destroy(); // kill client after server's response
});

client.on('close', function() {
	console.log('Connection closed');
});