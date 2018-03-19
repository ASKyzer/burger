var orms = require('../config/orm.js')

var burger = {
  selectAll: function(cb) {
    orm.selectAll("burgers", function(res) {
      cb(res);
    }); // end of orm.selectAll
  } // endo of selectAll

  selectOne: function(column, valueOfCol, cb) {
    orm.selectOne("burgers", column, valueOfCol, function(res) {
      cb(res);
    });
  }// end of orm.selectOne

  updateOne: function(colToUpdate, newValue, column, columnValue, cb) {
    orm.updateOne("burgers", colToUpdate, newValue, column, columnValue, cb, function(res) {
      cb(res);
    });
  } // end of
}; // end of var burger

// Export the database functions for the controller (burgersController.js).
module.exports = burger;
