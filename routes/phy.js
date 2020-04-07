const express = require("express");
const data = require("../client/data.json");

const phyrouter = express.Router();
phyrouter.use(express.static("client"));

phyrouter.get("/", (_req, res) => {
  res.render("section", {
    title: "Physics Section",
    mod1: data.electro.name,
    desc1: data.electro.description,
    mod2: data.quant.name,
    desc2: data.quant.description,
    style: "home.css",
    script: "math.js",
  });
});

module.exports.route = phyrouter;
