const Testimonial = require("../models/testimonials.model.js");
const { validationResult } = require("express-validator");

exports.getAllTestimonials = async (req, res) => {
  try {
    const testimonials = await Testimonial.find();
    res.status(200).json(testimonials);
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
};

exports.getTestimonialById = async (req, res) => {
  const { id } = req.params;
  try {
    const testimonial = await Testimonial.findById(id);
    if (!testimonial) {
      return res.status(404).json({ message: "Testimonial not found" });
    }
    res.status(200).json(testimonial);
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
};

exports.createTestimonial = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  const { quote, company_name, image, name } = req.body;

  try {
    const newTestimonial = new Testimonial({
      quote,
      company_name,
      image,
      name,
    });

    await newTestimonial.save();
    res.status(201).json(newTestimonial);
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
};

exports.updateTestimonial = async (req, res) => {
  const { id } = req.params;
  const { quote, company_name, image, name } = req.body;

  try {
    const updatedTestimonial = await Testimonial.findByIdAndUpdate(
      id,
      { quote, company_name, image, name },
      { new: true, runValidators: true }
    );

    if (!updatedTestimonial) {
      return res.status(404).json({ message: "Testimonial not found" });
    }

    res.status(200).json(updatedTestimonial);
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
};

exports.deleteTestimonial = async (req, res) => {
  const { id } = req.params;
  try {
    const deletedTestimonial = await Testimonial.findByIdAndDelete(id);

    if (!deletedTestimonial) {
      return res.status(404).json({ message: "Testimonial not found" });
    }

    res.status(200).json({ message: "Testimonial deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
};
