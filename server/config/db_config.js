var mysql = require("mysql");
var pool = mysql.createPool({connectionLimit: 10, host: "localhost", user: "root", password: "", database: "graana_db"});

module.exports = pool;
