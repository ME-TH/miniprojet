const express = require("express");
const data = require("../src/json/module.json");

const modrouter = express.Router();

modrouter.get("/", (_req, res) => {
  res.status(200).json(data);
});

module.exports = modrouter;
