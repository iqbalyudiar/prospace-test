const express = require("express");
const bodyParser = require("body-parser");

//  create express app
const app = express();

// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

// parse requests of content-type - application -json
app.use(bodyParser.json());

// Configuring the database
const dbConfig = require("./config/database.config");
const mongoose = require("mongoose");

mongoose.Promise = global.Promise;

// Connecting the database
mongoose
  .connect(dbConfig.url, {
    useNewUrlParser: true
  })
  .then(() => {
    console.log("Successfully connected to the database");
  })
  .catch(err => {
    console.log("Could not connect to the database. Exiting now...", err);
    process.exit();
  });

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Content-Type");
  res.header("Access-Control-Allow-Methods", "GET,PUT,POST,DELETE");
  next();
});

// Define a simple route
app.get("/", (req, res) => {
  res.json({
    message: "Welcome to Prospace Management Form"
  });
});

require("./app/routes/form.routes")(app);

app.listen(8080, () => {
  console.log("Server is listening on port http://localhost:8080");
});
