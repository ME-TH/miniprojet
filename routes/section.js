const express = require("express");
const modsection = require("./module");
const data = require("../src/json/section.json");

const sectrouter = express.Router();

sectrouter.get("/", (_req, res) => {
  res.status(200).json(data);
});
sectrouter.use("/module", modsection);

module.exports = sectrouter;
