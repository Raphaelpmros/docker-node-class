const express = require('express');
const app = express();
const path = require('path');
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
  var sql = "CREATE TABLE IF NOT EXISTS games (id INT AUTO_INCREMENT PRIMARY KEY, title VARCHAR(255), year INT, score DOUBLE, rating VARCHAR(30))";
  con.query(sql, function (err, result) {
    if (err) throw err;
    console.log("Table created");
  });
});

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.get('/dog', (req, res) => {
  res.send("WOLF")
})

app.listen(3000, () => {
  console.log("listening on port 3000")
})