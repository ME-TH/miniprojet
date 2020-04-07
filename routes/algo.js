const express = require("express");

const algorouter = express.Router();
algorouter.use(express.static("client"));

algorouter.get("/", (_req, res) => {
  res.render("algo", { title: "Algo" });
});

module.exports.route = algorouter;
