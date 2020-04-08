const express = require("express");
const data = require("../client/data.json");

const mathrouter = express.Router();
mathrouter.use(express.static("client"));

mathrouter.get("/", (_req, res) => {
  res.render("section", {
    title: "Math Section",
    section: "section",
    image1: data.anal4.photos,
    image2: data.num.photos,
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
mathrouter.get("/analyse_4", (_req, res) => {
  res.render("module");
});

module.exports.route = mathrouter;
