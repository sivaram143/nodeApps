
/* to know about the block chain APis 
var blockchain = require('blockchain.info') */


var request = require('request');

var url = "https://api.blockchain.info/charts/transactions-per-second?timespan=5weeks&rollingAverage=8hours&format=json";

app.get('/', function(req, res){
    request(url, { json: true }, (err, res, body) => {
        if (err) { 
          return console.log(err); 
        }
        console.log(body);
      });

})



