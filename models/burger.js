var orm = require("../config/orm.js");

var burger = {
    selectAll: function(cb) {
        orm.selectAll("burgers", function(res) {
            cb(res);
        });
    },
    insertOne: function(burger_name, devoured, cb) {
        orm.insertOne("burgers", burger_name, devoured, function(res) {
            cb(res);
        });
    },
    updateOne: function(burger_name, devoured, id, cb) {
        orm.updateOne("burgers", burger_name, devoured, id, function(res) {
            cb(res);
        })
    }
}

module.exports = burger;