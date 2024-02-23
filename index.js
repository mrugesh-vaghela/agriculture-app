const express = require("express");
const logger = require("morgan");
const bodyParser = require("body-parser");
const { auth } = require("express-openid-connect");
require("dotenv").config();
// This will be our application entry. We'll setup our server here.
const http = require("http");
// Set up the express app

const config = {
  authRequired: false,
  auth0Logout: true,
  secret: process.env.SECRET,
  baseURL: process.env.BASEURL,
  clientID: process.env.CLIENTID,
  issuerBaseURL: process.env.ISSUER,
};

const app = express();
// Log requests to the console.
app.use(logger("dev"));
app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: true }));
app.use(auth(config));

// Parse incoming requests data (https://github.com/expressjs/body-parser)
app.use(bodyParser.json());
// Setup a default catch-all route that sends back a welcome message in JSON format."
var models = require("./models");
const port = parseInt(process.env.PORT, 10) || 3000;
app.set("port", port);
console.log("server started on ", port);
models.sequelize.sync().then(function () {
  app.listen(port);
});

require("./routes")(app);
app.get("/", (req, res) => {
  // console.log(req.oidc.isAuthenticated());
  const isAuthenticated = req.oidc.isAuthenticated();
  const response = isAuthenticated ? req.oidc.user : "Not logged in";
  return res.send(response);
});

module.exports = app;
