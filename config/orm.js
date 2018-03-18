var connection = require("./connection.js");

// Object Relational Mapper (ORM)

// SELECT All from burgers table.
var orm = {
  selectAll: function() {
    var queryString = "SELECT * FROM burgers";
    connection.query(queryString, function(err, result) {
      if (err) throw err;
      console.log(result);
    });
  },
  // SELECT One from burgers table.
  selectOne: function(column, valueOfCol) {
    var queryString = "SELECT * FROM burgers WHERE ?? = ?";
    console.log(queryString);
    connection.query(queryString, [column, valueOfCol), function(err, result) {
      if (err) throw err;
      console.log(result);
    });
  },
  // UPDATE One from burgers table.
  UpdateOne(): function(whatToUpdate, colToUpdate, newValue, column, columnValue) {
    var queryString = "UPDATE ?? SET ?? = ? WHERE ?? = ?",
    console.log(queryString);
    connection.query(queryString, [whatToUpdate, column, valueOfCol, id],
      function(err, result) {
        if (err) throw err;
        console.log(result);
      }
    );
  }
};

module.exports = orm;
