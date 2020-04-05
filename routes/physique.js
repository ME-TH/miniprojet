const express = require("express");
const path = require("path");

const phyrouter = express.Router();

phyrouter.use(express.static(path.join(__dirname, "../client/physique")));

phyrouter.get("/", (req, res) => {
  res.sendFile("physique.html", {
    root: path.join(__dirname, "../client/physique/"),
  });
});

module.exports.phy = phyrouter;
