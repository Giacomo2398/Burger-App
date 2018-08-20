var express = require("express");
var burger = require("../models/burger.js");
var router = express.Router();

router.get("/", function(req, res){
    burger.selectAll(function(data){
        let hbsObject = {
            burgers: data
        };
        res.render("index", hbsObject);
    });
});

router.post("/api/burgers", function(req, res){
    burger.insertOne(
        [
            req.body.burger_name
        ], 
        function(result){
            res.json({ id: result.insertId});
        }
    );
});

router.put("/api/burgers/:id", function(req, res){
    let condition = "id = " + req.params.id;
    burger.updateOne({
        devoured: "1"
    } ,condition, 
    function(result){
        if (result.changedRows === 0) {
            return res.status(404).end();
        }else{
          res.status(200).end();
        }
    });
});

router.delete('/api/burgers/:id', function (req, res) {
    let condition = 'id = ' + req.params.id;
    burger.delete(condition, function (res) {
        if (result.affectedRows == 0) {
            return res.status(404).end();
        } else {
            res.status(200).end();
        }
    });
});

module.exports = router;