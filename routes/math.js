const express = require("express");

const mathrouter = express.Router();
mathrouter.use(express.static("client"));

mathrouter.get("/", (_req, res) => {
  res.render("math", {
    title: "Math Section",
    style: "home.css",
    script: "math.js",
  });
});

module.exports.route = mathrouter;
