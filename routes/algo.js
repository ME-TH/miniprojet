const express = require("express");

const algorouter = express.Router();

algorouter.get("/", (_req, res) => {
  res.render("algo", { title: "Algo" });
});

module.exports.route = algorouter;
