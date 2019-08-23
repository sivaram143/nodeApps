var crypto = require('crypto');

var cipher = crypto.createDecipher('aes-256-ecb', 'password');
var mystr=  cipher.update('09e15c7e992c716f7190f7ecf9f9fbc7', 'hex', 'utf8') + cipher.final('utf8');

console.log(mystr);