var request =  require('request');


request ({
    method: 'GET',
    uri: "http://httpbin.org/ip",
    timeout: 10000
},

function(error, response, body){
    console.log(body);
});