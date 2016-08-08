var connection = require('../connection');

function Todo(){
    this.get = function(res){
      connection.pool.getConnection(function (err, conn) {
        if (err) {
          logDebug.errorLog("organization.js", 'POOL ==->' + err);
          callback("false", ecode.code.METHOD_FAILURE, "420-02", "Create Organization", organizationName);
        }
        else{
          conn.query('select * from todo_list', function(err, result) {
            conn.release();
            res.send(result);
          });
        }
      });
    }
    
    this.create = function(todo, res) {
      connection.pool.getConnection(function (err, conn) {
        conn.query('insert into todo_list set ?', todo, function(err, result) {
          conn.release();
          if (err) {
            res.send({status: 1, message: 'TODO creation failed'});
          } else {
            res.send({status: 0, message: 'TODO created successfully'});
          }
        });
      });
    };
    
    this.update = function(todo, res) {
      connection.pool.getConnection(function (err, conn) {
        conn.query('update todo_list set ? where id = ?', [todo, todo.id], function(err, result) {
          conn.release();
          if (err) {
            res.send({status: 1, message: 'TODO update failed'});
          } else {
            res.send({status: 0, message: 'TODO updated successfully'});
          }
        });
      });
    };

    this.delete = function(id, res) {
      connection.pool.getConnection(function (err, conn) {
        conn.query('delete from todo_list where id = ?', [id], function(err, result) {
           conn.release();
           if (err) {
             res.send({status: 1, message: 'Failed to delete'});
           } else {
             res.send({status: 0, message: 'Deleted successfully'});
           }
         });
       });
     };
}

module.exports = new Todo();