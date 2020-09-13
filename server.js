// Express & MySQL Dependancies
const express = require('express');
const PORT = process.env.PORT || 8080;
const exphbs = require("express-handlebars");
const app = express();
const routes = require("./controllers/burgers_controller");

// Set Express-Handlebars as template engine and middleware and the main page as the default layout
app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");
app.use(routes);

app.listen(PORT, function() {
  console.log("Server listening on: http://localhost:" + PORT);
});
