var connection = require("./connection.js");

// Object Relational Mapper (ORM)

var orm = {

  // SELECT All from burgers table.
  selectAll: function(table, cb) {
    var queryString = "SELECT * FROM ??";
    connection.query(queryString, [table], function(err, result) {
      if (err) {
        throw err;
      }
        cb(result);
        console.log(result);
    });
  }, // end of selectAll

  // SELECT One from burgers table.
  selectOne: function(column, valueOfCol, cb) {
    var queryString = "SELECT * FROM burgers WHERE ?? = ?";
    console.log(queryString);
    connection.query(queryString, [column, valueOfCol], function(err, result) {
      if (err) {
        throw err;
      }
        cb(result);
        console.log(result);
    });
  }, // end of selectOne

  // UPDATE One from burgers table.
  updateOne(): function(table, colToUpdate, newValue, column, columnValue, cb) {
    var queryString = "UPDATE ?? SET ?? = ? WHERE ?? = ?",
    console.log(queryString);
    connection.query(queryString, [table, colToUpdate, newValue, column, columnValue], function(err, result) {
      if (err) {
        throw err;
      }
        cb(result);
        console.log(result);
      });
  } // end of updateOne
}; // end of orm

module.exports = orm;
