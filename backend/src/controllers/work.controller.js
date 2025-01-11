const WorkSection = require("../models/work.models.js");
const { validationResult } = require("express-validator");

exports.getAllWorkSection = async (req, res) => {
  try {
    const workSections = await WorkSection.find();
    res.status(200).json(workSections);
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
};

exports.createWorkSection = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  const { description, years_of_work, works } = req.body;

  try {
    const newWorkSection = new WorkSection({
      description,
      years_of_work,
      works,
    });

    await newWorkSection.save();
    res.status(201).json(newWorkSection);
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
};

exports.updateWorkSection = async (req, res) => {
  const { description, years_of_work, works } = req.body;

  try {
    const updatedWorkSection = await WorkSection.findOneAndUpdate(
      {},
      { description, years_of_work, works },
      { new: true, runValidators: true }
    );

    if (!updatedWorkSection) {
      return res.status(404).json({ message: "Work section not found" });
    }

    res.status(200).json(updatedWorkSection);
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
};

exports.deleteWorkSection = async (req, res) => {
  const { id } = req.params;
  try {
    const deletedWorkSection = await WorkSection.findByIdAndDelete(id);

    if (!deletedWorkSection) {
      return res.status(404).json({ message: "Work section not found" });
    }

    res.status(200).json({ message: "Work section deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
};
