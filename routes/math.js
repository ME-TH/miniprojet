const express = require("express");

const mathrouter = express.Router();

mathrouter.get("/", (_req, res) => {
  res.render("math", { title: "Math" });
});

module.exports.route = mathrouter;
