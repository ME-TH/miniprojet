//import dependecies

const express = require("express");
//const morgan = require("morgan");
const helmet = require("helmet");
const cors = require("cors");
const mongoose = require("mongoose");
const bodyparser = require("body-parser");

//setting environment
require("dotenv").config();

//import routes

const error = require("./routes/error");
const feedback = require("./routes/feedback");
const section = require("./routes/section");

// setting port

const PORT = process.env.PORT;

//creating the app

var app = express();

//connect to the database

mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

//app.use(morgan("common"));
app.use(helmet());
app.use(
  cors({
    origin: process.env.CORS_ORIGIN,
  })
);
app.use(express.json());
app.use(bodyparser.urlencoded({ extended: false }));

//set up static folders

app.use("/section", section);
app.use("/logs/feedback", feedback);

app.use(error.notfound);
app.use(error.errorhandler);

//listening at the port

app.listen(PORT, (err) => {
  if (err) {
    console.log(err);
    return;
  }
  console.log(`Your Site is Hosted On URL = http://localhost:${PORT}/`);
});
