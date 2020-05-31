var connection = require("../config/connection.js");

var orm = {
    selectAll: function(table, cb) {
        var queryString = "SELECT * FROM" + table + ";";
        connection.query(queryString, function(err, result) {
            if (err) throw err;
            cb(result);
        });
    },
    insertOne: function(table, burger_name, devoured, cb) {
        var queryString = "INSERT INTO" + table + "(burger_name, devoured) VALUES (?,?)";
        connection.query(queryString, [burger_name, devoured], function(err, result) {
            if (err) throw err;
            cb(result);
        });
    },
    updateOne: function(table, burger_name, devoured, id) {
        var queryString = "UPDATE" + table + "SET burger_name = ?, devoured = ? WHERE id = ?";
        connection.query(queryString, [burger_name, devoured, id], function(err, result) {
            if (err) throw err;
            console.log(result);
        });
    }
}

module.exports = orm;