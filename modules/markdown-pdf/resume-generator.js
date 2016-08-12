/* generate pdf from md 
   $ npm install markdown-pdf
   $ node resume-generator.js
*/
var markdownpdf = require("markdown-pdf");
var fs = require("fs");

fs.createReadStream("resume.md")
  .pipe(markdownpdf())
  .pipe(fs.createWriteStream("resume_md.pdf"))