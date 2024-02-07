// const express = require("express");
// const app = express();
const mysql = require('mysql2');

const connection = mysql.createConnection({
  host: 'mysql-db',
  user: 'root',
  password: 'root',
  database: 'test',
});


connection.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
  var sql = "CREATE TABLE customers (name VARCHAR(255), address VARCHAR(255))";
  connection.query(sql, function (err, result) {
    if (err) throw err;
    console.log("Table created");
  });
});
