const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const workSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
  tags: {
    type: [String],
    required: true,
  },
});

const workSectionSchema = new Schema({
  description: {
    type: String,
    required: true,
  },
  years_of_work: {
    type: Number,
    required: true,
  },
  works: [workSchema],
});

workSectionSchema.pre("save", async function (next) {
  const count = await mongoose.model("WorkSection").countDocuments();
  if (count >= 1) {
    throw new Error("Only one document is allowed in this collection.");
  }
  next();
});

const WorkSection = mongoose.model("WorkSection", workSectionSchema);

module.exports = WorkSection;
