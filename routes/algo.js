const express = require("express");
const path = require("path");

const algorouter = express.Router();

algorouter.use(express.static(path.join(__dirname, "../client/algo")));

algorouter.get("/", (_req, res) => {
  res.sendFile("algo.html", {
    root: path.join(__dirname, "../client/algo/"),
  });
});

module.exports.algo = algorouter;
