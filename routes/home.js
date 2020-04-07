const express = require("express");
const data = require("../client/data.json");

const homerouter = express.Router();
homerouter.use(express.static("client"));

homerouter.get("/", (_req, res) => {
  res.render("home", {
    title: "Qrayti Web App",
    style: "home.css",
    script: "home.js",
  });
});

module.exports.route = homerouter;
