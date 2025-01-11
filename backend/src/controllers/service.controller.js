const ServicesSection = require("../models/service.model.js");
const { validationResult } = require("express-validator");

exports.getServicesSection = async (req, res) => {
  try {
    const servicesSection = await ServicesSection.findOne();
    if (!servicesSection) {
      return res.status(404).json({ message: "Services section not found" });
    }
    res.status(200).json(servicesSection);
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
};

exports.createServicesSection = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  const { heading, description, num_of_projects, num_of_awards, services } =
    req.body;

  try {
    const existingSection = await ServicesSection.findOne();
    if (existingSection) {
      return res
        .status(400)
        .json({ message: "Only one services section is allowed." });
    }

    const newServicesSection = new ServicesSection({
      heading,
      description,
      num_of_projects,
      num_of_awards,
      services,
    });

    await newServicesSection.save();
    res.status(201).json(newServicesSection);
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
};

exports.updateServicesSection = async (req, res) => {
  const { heading, description, num_of_projects, num_of_awards, services } =
    req.body;

  try {
    const updatedServicesSection = await ServicesSection.findOneAndUpdate(
      {},
      { heading, description, num_of_projects, num_of_awards, services },
      { new: true, runValidators: true }
    );

    if (!updatedServicesSection) {
      return res.status(404).json({ message: "Services section not found" });
    }

    res.status(200).json(updatedServicesSection);
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
};

exports.deleteServicesSection = async (req, res) => {
  return res.status(400).json({
    message: "Deletion is not allowed. Only one services section can exist.",
  });
};
