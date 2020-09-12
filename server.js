// Heroku Environmental Variables
const username = process.env.username;
const password = process.env.password;
const database = process.env.database;
const host = process.env.host;

// Express & MySQL Dependancies
const express = require('express');
const exphbs = require("express-handlebars");
const app = express();
const PORT = process.env.PORT || 8080;
const mysql = require("mysql");

// Set Express-Handlebars as template engine and middleware and the main page as the default layout
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// MySQL Connection for Heroku deployment
// const connection = mysql.createConnection({
//     host: host,
//     port: 3306,
//     user: username,
//     password: password,
//     database: database
// });

// MySQL localhost connection for testing purposes only
const connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "password",
    database: "burgers_db"
});

app.get("/", function(req, res) {
  connection.query(`SELECT * FROM burgers`, function(error, result) {
      if (error) throw error;
      res.render("index", {burgers: result});
  })
});

app.listen(PORT, function() {
  console.log("Server listening on: http://localhost:" + PORT);
});
