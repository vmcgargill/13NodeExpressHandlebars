// Express & MySQL Dependancies
const express = require('express');
const app = express();
const PORT = process.env.PORT || 8080;
const orm = require('./config/orm')

const exphbs = require("express-handlebars");
// Set Express-Handlebars as template engine and middleware and the main page as the default layout
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// Create route for index that automatically loads all the burgers and sorts them into a list
app.get("/", function(req, res) {
    orm.selectAll(res);
});

app.listen(PORT, function() {
  console.log("Server listening on: http://localhost:" + PORT);
});
