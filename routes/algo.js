const express = require("express");
const data = require("../client//json/data.json");

const algorouter = express.Router();
algorouter.use(express.static("client"));

algorouter.get("/", (_req, res) => {
  res.render("section", {
    title: "Programming Section",
    section: "section",
    image1: data.base.image,
    image2: data.struct.image,
    url1: data.base.url,
    url2: data.struct.url,
    id1: data.base.id,
    id2: data.struct.id,
    mod1: data.base.name,
    mod2: data.struct.name,
    desc1: data.base.description,
    desc2: data.struct.description,
  });
});

module.exports = algorouter;
