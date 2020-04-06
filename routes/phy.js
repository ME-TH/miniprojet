const express = require("express");
const path = require("path");

const phyrouter = express.Router();

phyrouter.use(express.static(path.join(__dirname, "../client/phy")));

phyrouter.get("/", (_req, res) => {
  res.sendFile("phy.html", {
    root: path.join(__dirname, "../client/phy/"),
  });
});

module.exports.phy = phyrouter;
