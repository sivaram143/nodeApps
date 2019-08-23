var request =  require('request');


request ({
    method: 'GET',
    uri: "http://www.google.com",
    timeout: 10000
},

function(error, response, body){
    console.log(body);
});