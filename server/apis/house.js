var express = require("express");
var router = express.Router();
var db = require("../config/db_config.js");

// Retrieve all house data
router.get("/houses", function (req, res) {
  db.query("SELECT * FROM data", function (error, results, fields) {
    if (error) 
      throw error;
    return res.send({error: false, length: results.length, data: results, message: "all data."});
  });
});

// Retrieve house with id
router.get("/house/:id", function (req, res) {
  let house_id = req.params.id;
  if (!house_id) {
    return res.status(400).send({error: true, message: "Please provide house_id"});
  }

  db.query("SELECT * FROM data where id=?", house_id, function (error, results, fields) {
    if (error) 
      throw error;
    return res.send({error: false, data: results[0], message: "house."});
  });
});
module.exports = router;
