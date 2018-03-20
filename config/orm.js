//orm for querying mysql

var connection = require('../config/connection.js');

// helper functions for SQL queries
function printQuestionMarks(number) {
    var array = [];
    for (var i = 0; i < number; i++) {
        array.push("?");
    };
    return array.toString();
};

// converts obj values to SQL notation
function objToSQL(ob) {
    var arr = [];
    for (var key in ob) {
        var value = ob[key];
        if (Object.hasOwnProperty.call(ob,key)) {
            if (typeof value === 'string' && value.indexOf(" ") >= 0) {
                value = "'" + value + "'";
            }
            arr.push(key + '='+ value);
        }
    }
    return arr.toString();
}
// ORM Query functions
var orm = {

    //select all eaten burgers
    selectAll: function (tableInput, cb) {
        var queryString = "SELECT * FROM " + tableInput + ";";
        connection.query(queryString, function(err, result) {
            if(err){
                throw err;
            }
            cb(result);
        })
    },
    // insert a burger into the database
    insertOne: function(table, cols, vals, cb) {
        var queryString = "INSERT INTO " + table;
        queryString += "(";
        queryString += cols.toString();
        queryString += ")";
        queryString += "VALUES (";
        queryString += printQuestionMarks(vals.length);
        queryString += ") ";

        console.log(queryString);

        connection.query(queryString, vals, function (err, result) {
            if (err){
                throw err;
            }
            cb(result);
        });
    },
    updateOne: function (table, objColVals, condition, cb) {
        var queryString = "UPDATE " + table;
        queryString += ' SET ';
        queryString += objToSQL(objColVals);
        queryString += ' WHERE ';
        queryString += condition;

        console.log(queryString);

        connection.query(queryString, function(err, result) {
            if (err){
                throw err;
            }
            cb(result);
        });
    }
};

module.exports = orm;
