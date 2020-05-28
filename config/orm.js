var connection = require("../config/connection.js");

var orm = {
    selectAll: function() {
        var queryString = "SELECT burgers FROM burger_db";
        connection.query(queryString, function(err, result) {
            if (err) throw err;
            console.log(result);
        });
    },
    insertOne: function(burger_name, devoured) {
        var queryString = "INSERT INTO burgers (burger_name, devoured) VALUES (?,?)";
        connection.query(queryString, [burger_name, devoured], function(err, result) {
            if (err) throw err;
            console.log(result);
        });
    },
    updateOne: function(burger_name, devoured, id) {
        var queryString = "UPDATE burgers SET burger_name = ?, devoured = ? WHERE id = ?";
        connection.query(queryString, [burger_name, devoured, id], function(err, result) {
            if (err) throw err;
            console.log(result);
        });
    }
}

module.exports = orm;