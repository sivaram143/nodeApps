// reading bytes throgh command line args
var bytes = process.argv[2];
if(!bytes){
  console.log("Usage: node bytesToSize.js <num_in_bytes>")
  return true
}

// function to convert bytes to size
function bytesToSize(bytes) {
    var sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB'];
    if (bytes == 0) return 'n/a';
    var i = parseInt(Math.floor(Math.log(bytes) / Math.log(1024)));
    if (i == 0) return bytes + ' ' + sizes[i];
    return (bytes / Math.pow(1024, i)).toFixed(1) + ' ' + sizes[i];
};

// calling function
console.log(bytesToSize(bytes));