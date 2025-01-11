const AboutSection = require("../models/about.model.js");
const { validationResult } = require("express-validator");

exports.getAboutSection = async (req, res) => {
  try {
    const aboutSection = await AboutSection.findOne();
    if (!aboutSection) {
      return res.status(404).json({ message: "About section not found" });
    }
    res.status(200).json(aboutSection);
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
};

exports.createAboutSection = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  const {
    heading,
    description,
    years_on_the_market,
    num_of_customers,
    banner,
    heading_two,
    marquee,
  } = req.body;

  try {
    const existingSection = await AboutSection.findOne();
    if (existingSection) {
      return res
        .status(400)
        .json({ message: "Only one about section is allowed." });
    }

    const newAboutSection = new AboutSection({
      heading,
      description,
      years_on_the_market,
      num_of_customers,
      banner,
      heading_two,
      marquee,
    });

    await newAboutSection.save();
    res.status(201).json(newAboutSection);
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
};

exports.updateAboutSection = async (req, res) => {
  const {
    heading,
    description,
    years_on_the_market,
    num_of_customers,
    banner,
    heading_two,
    marquee,
  } = req.body;

  try {
    const updatedAboutSection = await AboutSection.findOneAndUpdate(
      {},
      {
        heading,
        description,
        years_on_the_market,
        num_of_customers,
        banner,
        heading_two,
        marquee,
      },
      { new: true, runValidators: true }
    );

    if (!updatedAboutSection) {
      return res.status(404).json({ message: "About section not found" });
    }

    res.status(200).json(updatedAboutSection);
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
};

exports.deleteAboutSection = async (req, res) => {
  return res.status(400).json({
    message: "Deletion is not allowed. Only one about section can exist.",
  });
};
