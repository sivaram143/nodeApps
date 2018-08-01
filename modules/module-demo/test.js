
var test = require('./module')
var test1 = require('./module2')


console.log("=========Module1================");
console.log(test.addMethod(10,20));
console.log(test.subMethod(10,6));
console.log(test.mulMethod(6,5));

console.log("=========Module2================");
console.log(test1.addMethod(10,20));
console.log(test1.subMethod(10,6));
console.log(test1.mulMethod(6,5));