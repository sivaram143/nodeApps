/*  To understand difference between exports and module.exports
    - Initially exports and module.exports point at the same empty object.
    - exports is just module.exports's little helper. 
    - Your module returns module.exports to the caller ultimately, not exports. 
    Run: $ node export-module-export.js
*/

// Ref: 
// http://www.hacksparrow.com/node-js-exports-vs-module-exports.html
// http://www.hacksparrow.com/javascript-check-object-types.html
// pi.js
module.exports = 22/7;

// app.js
var PI = require('./pi');
console.log(PI);
