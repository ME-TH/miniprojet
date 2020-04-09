const express = require("express");
const feedschema = require("../../models/feedschema");

const feedback = express.Router();
feedback.use(express.json());

feedback.get("/", async (_req, res) => {
  try {
    const entries = await feedschema.find();
    res.json(entries);
  } catch (error) {
    next(error);
  }
});
feedback.post("/", async (req, res, next) => {
  try {
    const Feedschema = new feedschema(req.body);
    const createdfeed = await Feedschema.save();
    res.json(createdfeed);
  } catch (error) {
    if (error.name === "ValidationError") {
      res.status(422);
    }
    next(error);
  }
});

module.exports = feedback;
