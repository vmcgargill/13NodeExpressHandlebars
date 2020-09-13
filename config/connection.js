// Heroku Environmental Variables
const username = process.env.username;
const password = process.env.password;
const database = process.env.database;
const host = process.env.host;
const mysql = require("mysql");

// MySQL Connection for Heroku deployment
const connection = mysql.createConnection({
    host: host,
    port: 3306,
    user: username,
    password: password,
    database: database
});

// Make connection.
connection.connect(function(err) {
    if (err) throw err;
});

module.exports = connection;