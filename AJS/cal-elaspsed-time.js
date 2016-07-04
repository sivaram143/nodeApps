/*
  Sample Script to calculated estimated time to
  complete the operation
*/
'use strict';

/* first way */
var times = 10;
console.time('Estimated Time');
for (var i = 0; i < times; ++i) {
  console.log('Sivaram');
}
console.timeEnd('Estimated Time');


/* second way
  var begin = Date.now();
  for (var i = 0; i < 10; ++i) {
    console.log('Sivaram');
  }
  var end = Date.now();
  var timeSpent=(end-begin)/1000+"secs";

  console.log("Estimated Time:"+timeSpent);
 */