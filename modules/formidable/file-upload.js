/* To Run : node file-upload.js*/
/* open browser and access localhost:5000 */
const formidable = require('formidable'),
    http = require('http'),
    fs = require('fs');

const server = http.createServer(function (req, res) {
  if (req.url == '/upload' && req.method.toLowerCase() == 'post') {

    // parse a file upload
    var form = new formidable.IncomingForm();
    form.parse(req, function (err, fields, files) {
     var oldpath = files.filetoupload.path;
     var newpath = 'uploads/' + files.filetoupload.name;
     fs.rename(oldpath, newpath, function (err) {
       if (err) throw err;
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.write(`<p>File uploaded successfully and moved from tmp to "${newpath}"!</p>`);
        res.write('\n');
        res.write('<a href="/">Back to upload form</a>')
        res.end();
     });
      });
  } else {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write('<center><form action="upload" method="post" enctype="multipart/form-data">');
    res.write('<input type="file" name="filetoupload"><br>');
    res.write('<input type="submit">');
    res.write('</form></center>');
    return res.end();
  }
});

let PORT = process.env.PORT || 5000
server.listen(PORT);

console.log(`Server Lisenting to Port: ${PORT}`);




/* To check for specific extension
   path.extname(req.files.file.name).toLowerCase() === '.png')
 */
