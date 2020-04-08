const express = require("express");

const homerouter = express.Router();
homerouter.use(express.static("client"));

homerouter.get("/", (_req, res) => {
  res.render("home", {
    title: "Qrayti Web App",
  });
});

module.exports.route = homerouter;
