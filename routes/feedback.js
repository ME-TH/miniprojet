const express = require("express");
const feedschema = require("../models/feedschema");

const feedrouter = express.Router();

feedrouter.get("/", async (_req, res) => {
  try {
    const entries = await feedschema.find();
    res.json(entries);
  } catch (error) {
    next(error);
  }
});

feedrouter.post("/", async (req, res, next) => {
  try {
    await new feedschema(req.body).save();
    res.status(204).end();
  } catch (error) {
    if (error.name === "ValidationError") {
      res.status(422);
    }
    next(error);
  }
});

module.exports = feedrouter;
