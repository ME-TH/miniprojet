const express = require("express");
const data = require("../client/data.json");

const algorouter = express.Router();
algorouter.use(express.static("client"));

algorouter.get("/", (_req, res) => {
  res.render("section", {
    title: "Programming Section",
    mod1: data.base.name,
    desc1: data.base.description,
    mod2: data.structure.name,
    desc2: data.structure.description,
    style: "home.css",
    script: "math.js",
  });
});

module.exports.route = algorouter;
