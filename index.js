// const express = require("express");
// const app = express();
const mysql = require('mysql2');

const con = mysql.createConnection({
  host: 'mysql-db',
  user: 'root',
  password: 'root',
  database: 'movies',
});


con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
  var sql = "CREATE TABLE IF NOT EXISTS movies (id INT AUTO_INCREMENT PRIMARY KEY, title VARCHAR(255), year INT, score DOUBLE, rating VARCHAR(3))";
  con.query(sql, function (err, result) {
    if (err) throw err;
    console.log("Table created");
  });
});