const express = require("express");

const phyrouter = express.Router();
phyrouter.use(express.static("client"));

phyrouter.get("/", (_req, res) => {
  res.render("phy", { title: "Phy" });
});

module.exports.route = phyrouter;
