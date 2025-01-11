const { body, param } = require("express-validator");

const validateWorkSectionCreation = [
  body("description")
    .isString()
    .withMessage("Description must be a string")
    .notEmpty()
    .withMessage("Description is required"),
  body("years_of_work")
    .isInt({ min: 0 })
    .withMessage("Years of work must be a positive integer")
    .notEmpty()
    .withMessage("Years of work is required"),
  body("works")
    .isArray()
    .withMessage("Works must be an array of work objects")
    .notEmpty()
    .withMessage("Works array cannot be empty"),
  body("works.*.title")
    .isString()
    .withMessage("Title in works must be a string")
    .notEmpty()
    .withMessage("Title in works is required"),
  body("works.*.image")
    .isString()
    .withMessage("Image in works must be a string")
    .notEmpty()
    .withMessage("Image in works is required"),
  body("works.*.tags")
    .isArray()
    .withMessage("Tags in works must be an array")
    .notEmpty()
    .withMessage("Tags in works cannot be empty"),
];

const validateWorkSectionUpdate = [
  param("id").isMongoId().withMessage("Invalid Work Section ID"),
  body("description")
    .isString()
    .optional()
    .withMessage("Description must be a string"),
  body("years_of_work")
    .isInt({ min: 0 })
    .optional()
    .withMessage("Years of work must be a positive integer"),
  body("works")
    .isArray()
    .optional()
    .withMessage("Works must be an array of work objects"),
  body("works.*.title")
    .isString()
    .optional()
    .withMessage("Title in works must be a string"),
  body("works.*.image")
    .isString()
    .optional()
    .withMessage("Image in works must be a string"),
  body("works.*.tags")
    .isArray()
    .optional()
    .withMessage("Tags in works must be an array"),
];

const validateWorkSectionId = [
  param("id").isMongoId().withMessage("Invalid Work Section ID"),
];

module.exports = {
  validateWorkSectionCreation,
  validateWorkSectionUpdate,
  validateWorkSectionId,
};
