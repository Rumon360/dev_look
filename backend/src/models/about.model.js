const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const aboutSectionSchema = new Schema({
  heading: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  years_on_the_market: {
    type: Number,
    required: true,
  },
  num_of_customers: {
    type: Number,
    required: true,
  },
  banner: {
    type: String,
    required: true,
  },
  heading_two: {
    type: String,
    required: true,
  },
  marquee: {
    type: String,
    required: true,
  },
});

aboutSectionSchema.pre("save", async function (next) {
  const count = await mongoose.model("AboutSection").countDocuments();
  if (count >= 1) {
    throw new Error("Only one document is allowed in this collection.");
  }
  next();
});

const AboutSection = mongoose.model("AboutSection", aboutSectionSchema);

module.exports = AboutSection;
