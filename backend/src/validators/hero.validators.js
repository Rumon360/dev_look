const { body, param } = require("express-validator");

const validateHeroSectionCreation = [
  body("heading")
    .isString()
    .withMessage("Heading must be a string")
    .notEmpty()
    .withMessage("Heading is required"),
  body("subHeading")
    .isString()
    .withMessage("Subheading must be a string")
    .notEmpty()
    .withMessage("Subheading is required"),
  body("achievements")
    .isArray()
    .withMessage("Achievements must be an array")
    .notEmpty()
    .withMessage("Achievements array cannot be empty"),
];

const validateHeroSectionUpdate = [
  param("id").isMongoId().withMessage("Invalid Hero Section ID"),
  body("heading").isString().optional().withMessage("Heading must be a string"),
  body("subHeading")
    .isString()
    .optional()
    .withMessage("Subheading must be a string"),
  body("achievements")
    .isArray()
    .optional()
    .withMessage("Achievements must be an array"),
];

const validateHeroSectionId = [
  param("id").isMongoId().withMessage("Invalid Hero Section ID"),
];

module.exports = {
  validateHeroSectionCreation,
  validateHeroSectionUpdate,
  validateHeroSectionId,
};
