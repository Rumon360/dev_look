const mongoose = require("mongoose");

const heroSectionSchema = new mongoose.Schema({
  heading: {
    type: String,
    required: true,
  },
  subHeading: {
    type: String,
    required: true,
  },
  achievements: [
    {
      number: {
        type: Number,
        required: true,
      },
      description: {
        type: String,
        required: true,
      },
    },
  ],
});

heroSectionSchema.pre("save", async function (next) {
  const count = await mongoose.model("HeroSection").countDocuments();
  if (count >= 1) {
    throw new Error("Only one document is allowed in this collection.");
  }
  next();
});

const HeroSection = mongoose.model("HeroSection", heroSectionSchema);

module.exports = HeroSection;
