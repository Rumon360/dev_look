const { body, param } = require("express-validator");

const validateTestimonialCreation = [
  body("quote")
    .isString()
    .withMessage("Quote must be a string")
    .notEmpty()
    .withMessage("Quote is required"),
  body("company_name")
    .isString()
    .withMessage("Company name must be a string")
    .notEmpty()
    .withMessage("Company name is required"),
  body("image")
    .isString()
    .withMessage("Image URL must be a string")
    .notEmpty()
    .withMessage("Image URL is required"),
  body("name")
    .isString()
    .withMessage("Name must be a string")
    .notEmpty()
    .withMessage("Name is required"),
];

const validateTestimonialUpdate = [
  param("id").isMongoId().withMessage("Invalid Testimonial ID"),
  body("quote").isString().optional().withMessage("Quote must be a string"),
  body("company_name")
    .isString()
    .optional()
    .withMessage("Company name must be a string"),
  body("image").isString().optional().withMessage("Image URL must be a string"),
  body("name").isString().optional().withMessage("Name must be a string"),
];

const validateTestimonialId = [
  param("id").isMongoId().withMessage("Invalid Testimonial ID"),
];

module.exports = {
  validateTestimonialCreation,
  validateTestimonialUpdate,
  validateTestimonialId,
};
