const express = require("express");
const data = require("../client/data.json");

const mathrouter = express.Router();
mathrouter.use(express.static("client"));

mathrouter.get("/", (_req, res) => {
  res.render("section", {
    title: "Math Section",
    section: "section",
    image1: "anal4",
    image2: "num",
    url1: data.anal4.url,
    url2: data.num.url,
    id1: data.anal4.id,
    id2: data.num.id,
    mod1: data.anal4.name,
    desc1: data.anal4.description,
    mod2: data.num.name,
    desc2: data.num.description,
    style: "section.css",
    script: "math.js",
  });
});

module.exports.route = mathrouter;
