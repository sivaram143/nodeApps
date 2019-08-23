var crypto = require('crypto');

var cipher = crypto.createCipher('aes-256-ecb', 'password');
var mystr = cipher.update('siva', 'utf8', 'hex') + cipher.final('hex');

cipher.update()

console.log(mystr);