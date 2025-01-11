const express = require("express");
const { verifyToken } = require("../middlewares");
const {
  getAllTestimonials,
  getTestimonialById,
  createTestimonial,
  updateTestimonial,
  deleteTestimonial,
} = require("../controllers/testimonial.controller.js");
const {
  validateTestimonialCreation,
  validateTestimonialUpdate,
  validateTestimonialId,
} = require("../validators/testimonial.validator.js");

const router = express.Router();

router.get("/", verifyToken, getAllTestimonials);

router.get("/:id", verifyToken, validateTestimonialId, getTestimonialById);

router.post("/", verifyToken, validateTestimonialCreation, createTestimonial);

router.put("/:id", verifyToken, validateTestimonialUpdate, updateTestimonial);

router.delete("/:id", verifyToken, validateTestimonialId, deleteTestimonial);

module.exports = router;
