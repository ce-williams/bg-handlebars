var express = require("express");
var bodyParser = require("body-parser");
require("dotenv").config();

var PORT = process.env.PORT || 8080;

var app = express();

// Serve static content for the app from the "public" directory

app.use(express.static("public"));

// parse applications/x-www-form-urlencoded

app.use(bodyParser.urlencoded({ extended: true }));

app.use(bodyParser.json());

// Set Handlebars.
var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));

app.set("view engine", "handlebars");

// import routes and gve the server access to them

var routes = require("./controller/burgers_controller.js");

app.use(routes);

// start our server so that it can begin listening to client requests.
app.listen(PORT, function() {
    // log (server-side) when our server has started
    console.log("Server listening on: http://localhost:" + PORT);
});


