/* Example using 'os' core module
   Ref: https://github.com/oscmejia/os-utils/blob/master/lib/osutils.js 
*/

// not supported const
/* 'use strict'; */

var os = require('os');

const RESOLUTION = 1000; // 1s CPU resolution 
 
function cpusInfo() { 
  return os.cpus().map(function(cpu) {
    var t = cpu.times;
 
    return {
      total: t.user + t.nice + t.sys + t.irq + t.idle,
      idle: t.idle
    };
  });
}
 
function cpuInfo() { 
  return cpusInfo().reduce(function(previous, cpu) {
    return {
      total: previous.total += cpu.total,
      idle: previous.idle += cpu.idle
    };
  }, {
    total: 0,
    idle: 0
  });
}
 
function cpusUsage(callback) {
  setTimeout(function(begin) {
    callback(cpusInfo().map(function(cpu, index) {
      var cpuBegin = begin[index];
 
      return 1 - (cpu.idle - cpuBegin.idle) / (cpu.total - cpuBegin.total);
    }));
  }, RESOLUTION, cpusInfo());
}
 
function cpuUsage(callback) {
  setTimeout(function(begin) {
    var end = cpuInfo();
 
    callback(1 - (end.idle - begin.idle) / (end.total - begin.total));
  }, RESOLUTION, cpuInfo());
}
 
// Individual cores usage.
// setInterval(cpusUsage.bind(null, console.log), 1000);

// Combined cores usage.
setInterval(cpuUsage.bind(null, console.log), 1000);