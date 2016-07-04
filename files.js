/* File Operations : Read, Write, Append */
'use strict';

var f='write.txt',
    fs=require('fs');

/* write content to file */
fs.writeFile(f,'text to write.',function(err){
  if(err)
    console.error(err);
  console.log('File Written!');
});

/* append content to file */
fs.appendFile(f,'text to append.',function(err){
  if(err)
    console.error(err);
  console.log('File Appended!');
});

/* read content from file */
fs.readFile(f, 'utf-8', function(err,data){
  if(err)
    console.error("read error: ", err);
  console.log(data);
});
