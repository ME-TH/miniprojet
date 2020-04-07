const express = require("express");
const data = require("../client/data.json");

const algorouter = express.Router();
algorouter.use(express.static("client"));

algorouter.get("/", (_req, res) => {
  res.render("section", {
    title: "Programming Section",
    section: "section",
    image1: "base",
    image2: "struct",
    url1: data.base.url,
    url2: data.struct.url,
    id1: data.base.id,
    id2: data.struct.id,
    mod1: data.base.name,
    desc1: data.base.description,
    mod2: data.struct.name,
    desc2: data.struct.description,
    style: "section.css",
    script: "algo.js",
  });
});

module.exports.route = algorouter;
