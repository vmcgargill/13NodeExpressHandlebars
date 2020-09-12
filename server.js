// Express & MySQL Dependancies
const express = require('express');
const exphbs = require("express-handlebars");
const app = express();
const PORT = process.env.PORT || 8080;
const orm = require('./config/orm')

// Set Express-Handlebars as template engine and middleware and the main page as the default layout
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

app.get("/", function(req, res) {
    orm.selectAll(res);
});

app.listen(PORT, function() {
  console.log("Server listening on: http://localhost:" + PORT);
});
