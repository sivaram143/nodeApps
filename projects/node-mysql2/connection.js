var mysql = require('mysql');

// connection using pool
var pool = mysql.createPool({
  connectionLimit : 100,
  host     : 'localhost',
  user     : 'root',
  password : 'root',
  database : 'todo'
});

module.exports.pool = pool;