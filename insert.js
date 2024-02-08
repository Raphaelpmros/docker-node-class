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
  var sql = "INSERT INTO movies (title, year, score, rating) VALUES ?";
  var values = [
    ['Amadeus', 1986, 9.2, 'R'],
    ['Amelie', 2001, 8.3, 'R'],
    ['Alien', 1979, 8.1, 'R'],
    ['The Iron Giant', 1999, 7.5, 'PG'],
    ['Stand By Me', 1986, 8.6, 'R'],
    ['Moonrise Kingdom', 2012, 7.3, 'PG-13'],
  ];
  con.query(sql, [values], function (err, result) {
    if (err) throw err;
    console.log("records inserted");
  });
});