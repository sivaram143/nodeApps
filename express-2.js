/*
  Access different urls using express routes
  http://localhost:5000 : redirects to the index.html page in /public
*/
var express = require('express');
var app = express();


// middleware for handling JSON, Raw, Text and URL encoded form data.
var bodyParser = require('body-parser');

// Create application/x-www-form-urlencoded parser
var urlencodedParser = bodyParser.urlencoded({ extended: false })


/* Access with : http://localhost:5000/users */
app.get('/users', function (req, res) {
  console.log("====================Request Info======================");
  console.log(req);
  console.log("====================Response Info=====================");
  console.log(res);
  res.send("Logged the request and response");
});




/* Access with : http://localhost:5000/users/1234?name="sivaram" */
app.get("/users/:id/:name", function (req, res) {
	var id = req.params.id;
  var name = req.params.name;
	res.send("You asked for user id'" + id + "' and passed the name = '" + name + "'");
});

/*
  Serving Static files
  To access static files from public directory
  Access with : http://localhost:5000/img1.png
*/
app.use(express.static(__dirname + '/public'));


/* Access with : http://localhost:5000/get-form.html */
app.get('/form-get', function (req, res) {
   // Prepare output in JSON format
   response = {
       first_name:req.query.first_name,
       last_name:req.query.last_name
   };
   console.log(response);
   res.end(JSON.stringify(response));
});

/* Access with : http://localhost:5000/post-form.html */
app.post('/form-post', urlencodedParser, function (req, res) {
   // Prepare output in JSON format
   response = {
       first_name:req.body.first_name,
       last_name:req.body.last_name
   };
   console.log(response);
   res.end(JSON.stringify(response));
});


/* Access with : http://localhost:5000/upload-form.html */
app.post('/file-upload', function (req, res) {
  res.send("NOT_IMPLEMENTED");
});

app.listen(5000, function () {
  console.log('app listening on port 5000!');
});



/* connect-midleware for generic use

app.configure(function() {
    app.set('port', process.env.PORT || 3000);
    app.set('views', __dirname + '/views');
    app.use(express.favicon());
    app.use(express.logger('dev'));
    app.use(express.bodyParser({ keepExtensions: true, uploadDir: __dirname + '/public/uploads' }));
    app.use(express.methodOverride());
    app.use(app.router);
    app.use(express.static(path.join(__dirname, '/public')));
    app.use(express.static(__dirname + '/static'));
    app.use(express.errorHandler());
});


*/
