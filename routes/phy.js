const express = require("express");

const phyrouter = express.Router();

phyrouter.get("/", (_req, res) => {
  res.render("phy", { title: "Phy" });
});

module.exports.route = phyrouter;
