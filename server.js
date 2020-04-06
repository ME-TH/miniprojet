//import dependecies

const path = require("path");
const express = require("express");

//creating the app

var app = express();

// setting port

const PORT = process.env.PORT || 3000;

//import routes

const mathroute = require("./routes/math");
const phyroute = require("./routes/phy");
const algoroute = require("./routes/algo");

app.use("/math", mathroute.math);
app.use("/algo", algoroute.algo);
app.use("/phy", phyroute.phy);

//define root folder
app.use(express.static(path.join(__dirname, "client/home")));

app.get("/", (_req, res) => {
  res.sendFile("index.html");
});

app.listen(PORT, () => {
  console.log(`Server Running on PORT : ${PORT}`);
  if (PORT == 3000) {
    console.log(`Your Site is Hosted On URL = http://localhost:${PORT}/`);
  }
});
