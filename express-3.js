/* 
 * gzip compress and cache api response in express
 * Install: 
    $ npm install express --save
    $ npm install compress --save // com­press (gzip) all of your server responses
 Testing:
   1. $ node express-3.js
   2. Open browser and navigate URL 
      http://localhost:5000
*/

var express = require('express');
var compression = require('compression');

var app = express();

var year;

// gzip the static resources before sending to the browser
// verification: Observe the response header Content-Encoding: gzip
app.use(compression());

// serving static resources from public by mounting Path '/'
// caches static files for a year 
// verification:
// 1. Requesting the page for the first time should have 200 response 
// 2. Requesting the page for again by doing the refresh (ctrl + R) should have 304 response
// 3. Requesting the page again by doing the hard refresh (ctrl + shift + R) should have 200 response
year = 1 * 365 * 24 * 60 * 60 * 1000;
app.use('/', express.static(__dirname + '/public', {maxAge: year}));

// listening port on 5000
app.listen(5000);