const express = require("express");
const path = require("path");

const mathrouter = express.Router();

mathrouter.use(express.static(path.join(__dirname, "../client/math")));

mathrouter.get("/", (req, res) => {
  res.sendFile("math.html", {
    root: path.join(__dirname, "../client/math/"),
  });
});

module.exports.math = mathrouter;
