const HeroSection = require("../models/hero.model.js");
const { validationResult } = require("express-validator");

exports.getHeroSection = async (req, res) => {
  try {
    const heroSections = await HeroSection.find();
    res.status(200).json(heroSections);
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
};

// POST a new hero section
exports.createHeroSection = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  const { heading, subHeading, achievements } = req.body;

  try {
    const newHeroSection = new HeroSection({
      heading,
      subHeading,
      achievements,
    });

    await newHeroSection.save();
    res.status(201).json(newHeroSection);
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
};

exports.updateHeroSection = async (req, res) => {
  const { id } = req.params;
  const { heading, subHeading, achievements } = req.body;

  try {
    const updatedHeroSection = await HeroSection.findByIdAndUpdate(
      id,
      { heading, subHeading, achievements },
      { new: true, runValidators: true }
    );

    if (!updatedHeroSection) {
      return res.status(404).json({ message: "Hero section not found" });
    }

    res.status(200).json(updatedHeroSection);
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
};

exports.deleteHeroSection = async (req, res) => {
  const { id } = req.params;
  try {
    const deletedHeroSection = await HeroSection.findByIdAndDelete(id);

    if (!deletedHeroSection) {
      return res.status(404).json({ message: "Hero section not found" });
    }

    res.status(200).json({ message: "Hero section deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
};
