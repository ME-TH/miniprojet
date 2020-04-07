const express = require("express");
const data = require("../client/data.json");

const mathrouter = express.Router();
mathrouter.use(express.static("client"));

mathrouter.get("/", (_req, res) => {
  res.render("section", {
    title: "Math Section",
    mod1: data.anal4.name,
    desc1: data.anal4.description,
    mod2: data.num.name,
    desc2: data.num.description,
    style: "home.css",
    script: "math.js",
  });
});

module.exports.route = mathrouter;
