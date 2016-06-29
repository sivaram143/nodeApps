/*
  HTTPS is the HTTP protocol over TLS/SSL
  To create an HTTPS server, we need two things: 
      a) an SSL certificate
      b) built-in https module.
  Types of Certificates: 'Certificate Authority', or CA 'self-signed'
  
  Generate a self-signed certificate:
   $ openssl genrsa -out key.pem
   $ openssl req -new -key key.pem -out csr.pem
   $ openssl x509 -req -days 9999 -in csr.pem -signkey key.pem -out cert.pem
   $ rm csr.pem
*/
var https = require('https');
var server = https.createServer(function(req, res){
    console.log('Https App started');
}).listen(8080);