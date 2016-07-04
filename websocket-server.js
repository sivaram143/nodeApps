/*
  support for wss:// and performance analytics centre.
  Install: npm install nodejs-websocket
*/

var ws = require("nodejs-websocket")

// Scream server example: "hi" -> "HI!!!"

// #Todo need to debug
var server = ws.createServer(function (conn) {
    console.log("New connection")
    conn.on("text", function (str) {
        console.log("Received "+str)
        conn.sendText(str.toUpperCase()+"!!!")
    })
    conn.on("close", function (code, reason) {
        console.log("Connection closed")
    })
}).listen(8001);