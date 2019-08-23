var rp =  require('request-promise');


rp ({
    method: 'GET',
    uri: "http://www.google.com",
    timeout: 10000
},

function(error, response, body){
    console.log(body);
});