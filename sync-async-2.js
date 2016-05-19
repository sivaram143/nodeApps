
// Synchronous
console.log("================= Synchronous ========================");
var fs = require('fs');
var fileContent = fs.readFileSync('welcome.js', 'utf-8');
console.log(fileContent);
console.log("something");

// Asynchronous
console.log("================= Asynchronous =======================");

fs.readFile('welcome.js', 'utf-8', function(err,data){
     if(!err){
         console.log(data);
     }
});
console.log("something");
 

