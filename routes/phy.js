const express = require("express");
const data = require("../client/data.json");

const phyrouter = express.Router();
phyrouter.use(express.static("client"));

phyrouter.get("/", (_req, res) => {
  res.render("section", {
    title: "Physics Section",
    section: "section",
    image1: data.electro.photos,
    image2: data.quant.photos,
    url1: data.electro.url,
    url2: data.quant.url,
    id1: data.electro.id,
    id2: data.quant.id,
    mod1: data.electro.name,
    desc1: data.electro.description,
    mod2: data.quant.name,
    desc2: data.quant.description,
    style: "section.css",
    script: "phy.js",
  });
});

module.exports.route = phyrouter;
