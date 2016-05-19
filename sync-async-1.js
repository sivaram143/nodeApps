// Synchronous
console.log("=================  Synchronous ======================");
console.log("one");
console.log("two");
console.log("three");

// Asynchronous
console.log("================== Asynchronous =====================");
console.log("one");
setTimeout(function timeout(){
   console.log("two");
}, 1000);
console.log("three");

