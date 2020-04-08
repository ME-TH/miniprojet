const express = require("express");
const data = require("../client/json/data.json");

const mathrouter = express.Router();
mathrouter.use(express.static("client"));

mathrouter.get("/", (_req, res) => {
  res.render("section", {
    title: "Math Section",
    section: "section",
    image1: data.anal4.image,
    image2: data.num.image,
    url1: data.anal4.url,
    url2: data.num.url,
    id1: data.anal4.id,
    id2: data.num.id,
    mod1: data.anal4.name,
    mod2: data.num.name,
    desc1: data.anal4.description,
    desc2: data.num.description,
  });
});
mathrouter.get("/analyse_4", (_req, res) => {
  res.render("module", {
    layout: "module.fe",
    title: data.anal4.name,
    style: "section.css",
  });
});

module.exports.route = mathrouter;
