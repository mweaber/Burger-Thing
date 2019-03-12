var express = require("express");

var router = express.Router();

var burger = require("../models/burger.js");

router.get("/", function (req, res) {
  burger.all(function (data) {
    var burgerObj = {
      burger: data
    }
    // console.log(burgerObj);
    res.render("index", burgerObj);
  });
});

router.post("/api/burger", function(req, res) {
    burger.create(["burger_name", "devoured"], [req.body.name, req.body.devour], function(result) {
      res.json({ id: result.insertId });
    })
  });


  router.put("/api/burger/:id", function (req, res) {
    burger.update({
        devour: req.body.devour
    }, req.params.id, function (result) {
        res.json({help: result})
    });
});

router.delete("/api/burger/:id", function(req, res){
  var condition = "id = " + req.params.id;

  burger.delete(condition, function(result){
    if (result.affectedRows === 0){
      return res.status(404).end();
    }else {
      res.status(200).end();
    }
  });
});

module.exports = router;