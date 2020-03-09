var express = require("express");
var router = express.Router();
var db = require("../config/db_config.js");

let filter = {
  LotArea: {
    min: "0",
    max: "10000"
  },
  HouseStyle: "2Story",
  BldgType: "1Fam",
  OverallCond: "0",
  YearBuilt: null,
  CentralAir: "Y",
  BedroomAbvGr: null,
  GarageType: "Attchd",
  SaleType: "WD",
  SalePrice: null
};

function generate_filter_query(jsonObj) {
  let query = "SELECT * FROM data where ";
  
  
  //console.log(JSON.parse(jsonObj));
  
  
  if (jsonObj["LotArea"]) {
    if (jsonObj["LotArea"]["min"] && jsonObj["LotArea"]["max"]) {
      query += "LotArea Between " + jsonObj["LotArea"]["min"] + " and " + jsonObj["LotArea"]["max"];
    }
  }
  if (jsonObj["HouseStyle"]) {
    query += " and HouseStyle = '" + jsonObj["HouseStyle"] + "'";
  }
  if (jsonObj["BldgType"]) {
    query += " and BldgType = '" + jsonObj["BldgType"] + "'";
  }
  if (jsonObj["OverallCond"]) {
    query += " and OverallCond >= " + jsonObj["OverallCond"];
  }
  if (jsonObj["YearBuilt"]) {
    query += " and YearBuilt >= '" + jsonObj["YearBuilt"] + "'";
  }
  if (jsonObj["CentralAir"]) {
    query += " and CentralAir = '" + jsonObj["CentralAir"] + "'";
  }
  if (jsonObj["BedroomAbvGr"]) {
    query += " and BedroomAbvGr = " + jsonObj["BedroomAbvGr"];
  }
  if (jsonObj["GarageType"]) {
    query += " and GarageType = '" + jsonObj["GarageType"] + "'";
  }
  if (jsonObj["SaleType"]) {
    query += " and SaleType = '" + jsonObj["SaleType"] + "'";
  }
  if (jsonObj["SalePrice"]) {
    if (jsonObj["SalePrice"]["min"] && jsonObj["SalePrice"]["max"]) {
      query += " and SalePrice Between " + jsonObj["SalePrice"]["min"] + " and " + jsonObj["SalePrice"]["max"];
    }
  }
  return query;
}

router.post("/filter", function (req, res) {
  let filter_options = req.body.apply_filter;
  console.log(typeof filter_options);
  
  //let filter_options = filter;
  let query = generate_filter_query(filter_options);
  if (!query) {
    return res.status(400).send({error: true, message: "Please provide filter options"});
  }
  console.log(query);

  db.query(query, function (error, results, fields) {
    if (error) {
      throw error;
    }
    return res.send({error: false, length: results.length, data: results, message: "total matched houses"});
  });
});

module.exports = router;
