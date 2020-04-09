const mongoose = require("mongoose");

const { Schema } = mongoose;

const requiredstring = {
  type: String,
  required: true,
};

const feedstruct = new Schema(
  {
    name: requiredstring,
    email: requiredstring,
    comment: requiredstring,
  },
  {
    timestamps: true,
  }
);
const feedschema = mongoose.model("feedback", feedstruct);

module.exports = feedschema;
