//import dependecies

const express = require("express");
const template = require("express-handlebars");
//const morgan = require("morgan");
const helmet = require("helmet");
const cors = require("cors");
const mongoose = require("mongoose");

//change .handlebars to .fe <==> front-end
const fe = template.create({
  defaultLayout: "main",
  partialsDir: "./views/parts",
  extname: ".fe",
});

//setting environment
require("dotenv").config();

//import routes

const home = require("./routes/home");
const algo = require("./routes/algo");
const math = require("./routes/math");
const phy = require("./routes/phy");
const error = require("./routes/error");
const feedback = require("./routes/logs/feedback");
const bodyparser = require("body-parser");

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

// setting port

const PORT = process.env.PORT;

//set handlebars engine

app.engine(".fe", fe.engine);
app.set("view engine", ".fe");
app.set("views", __dirname + "/views");

//set up static folders

app.use("/css", express.static(__dirname + "/css"));
app.use("/images", express.static(__dirname + "/Images"));
app.use("/js", express.static(__dirname + "/js"));
app.use("/pdf", express.static(__dirname + "/pdf"));

app.use("/", home);
app.use("/algorithmique", algo);
app.use("/physique", phy);
app.use("/mathematique", math);

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
