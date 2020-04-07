//import dependecies

const express = require("express");
const template = require("express-handlebars");
const fe = template.create({
  defaultLayout: "main",
  partialsDir: "./views/parts",
  extname: ".fe", //change .handlebars to .fe <==> front-end
  helpers: {},
});

//import routes

const home = require("./routes/home");
const algo = require("./routes/algo");
const math = require("./routes/math");
const phy = require("./routes/phy");

//creating the app

var app = express();

// setting port

const PORT = process.env.PORT || 3000;

//set handlebars engine

app.engine(".fe", fe.engine);
app.set("view engine", ".fe");
app.set("views", __dirname + "/views");

app.use(express.static("client"));

app.use("/", home.route);
app.use("/math", math.route);
app.use("/algo", algo.route);
app.use("/phy", phy.route);

//listening in the port

app.listen(PORT, (err) => {
  if (err) {
    console.log(err);
    return;
  }
  console.log(`Server Running on PORT : ${PORT}`);
  if (PORT == 3000) {
    console.log(`Your Site is Hosted On URL = http://localhost:${PORT}/`);
  }
});
