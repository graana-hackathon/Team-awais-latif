var express = require("express");
var app = express();
var bodyParser = require("body-parser");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
var cors = require('cors')

app.use(cors())
// set port
app.listen(5000, function () {
  console.log("Node app is running on port 5000");
});

var filterRouter = require("./apis/filter.js");
var houseRouter = require("./apis/house.js");
app.use(filterRouter);
app.use(houseRouter);

module.exports = app;