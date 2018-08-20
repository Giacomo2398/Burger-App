const connection = require("../config/connection.js");

let orm = {
  selectAll: function(tableInput, cb) {
    let queryString = "SELECT * FROM " + tableInput + ";";
      connection.query(queryString, function(err, result) {
        if (err) {
          throw err;
        }
        cb(result);
      });
    },
    insertOne: function(table, vals, cb) {
      let queryString = "INSERT INTO " + table + "(burger_name) VALUES (?)";
  
      connection.query(queryString, vals, function(err, result) {
        if (err) {
          throw err;
        }
        cb(result);
      });
    },
    updateOne: function(table, objColVals, condition, cb) {
      let queryString = "UPDATE " + table + " SET devoured = 1 WHERE " + condition;
      connection.query(queryString, function(err, result) {
        if (err) {
          throw err;
        }
        cb(result);
      });
    },
    delete: function (table, condition, cb) {
      var queryString = 'DELETE FROM ' + table;
      queryString = queryString + ' WHERE ';
      queryString = queryString + condition;
  
      console.log(queryString);
      connection.query(queryString, function (err, result) {
        if (err) throw err;
        cb(result);
      });
    }
};
  
module.exports = orm;

