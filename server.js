// Express & MySQL Dependancies
const express = require('express');
const exphbs = require("express-handlebars");
const app = express();
const PORT = process.env.PORT || 8080;
const connection = require('./config/connection')

// Set Express-Handlebars as template engine and middleware and the main page as the default layout
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

app.get("/", function(req, res) {
  connection.query(`SELECT * FROM burgers`, function(error, result) {
      if (error) throw error;
      res.render("index", {burgers: result});
  })
});

app.listen(PORT, function() {
  console.log("Server listening on: http://localhost:" + PORT);
});
