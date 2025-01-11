const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const caseStudySchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
});

const serviceSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  case_study: {
    type: caseStudySchema,
    required: true,
  },
});

const servicesSectionSchema = new Schema({
  heading: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  num_of_projects: {
    type: Number,
    required: true,
  },
  num_of_awards: {
    type: Number,
    required: true,
  },
  services: [serviceSchema],
});

servicesSectionSchema.pre("save", async function (next) {
  const count = await mongoose.model("ServicesSection").countDocuments();
  if (count >= 1) {
    throw new Error("Only one document is allowed in this collection.");
  }
  next();
});

const ServicesSection = mongoose.model(
  "ServicesSection",
  servicesSectionSchema
);

module.exports = ServicesSection;
