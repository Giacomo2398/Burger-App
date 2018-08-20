const orm = require("../config/orm.js");

var burger = {
    selectAll: function(cb){
        orm.selectAll("burgers", function(res){
            cb(res);  
        });
    },
    insertOne: function(vals, cb){
        orm.insertOne("burgers", vals, function(res){
            cb(res);
        });
    },
    updateOne: function(id, cb){
        orm.updateOne("burgers", id, function(res){
            cb(res)
        });
    },
    delete: function (condition, cb) {
        orm.delete("burgers", condition, function (res) {
          cb(res);
        });
    }
};

module.exports = burger;