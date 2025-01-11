const { body } = require("express-validator");

const validateServicesSectionCreation = [
  body("heading")
    .isString()
    .withMessage("Heading must be a string")
    .notEmpty()
    .withMessage("Heading is required"),
  body("description")
    .isString()
    .withMessage("Description must be a string")
    .notEmpty()
    .withMessage("Description is required"),
  body("num_of_projects")
    .isInt({ min: 0 })
    .withMessage("Number of projects must be a positive integer")
    .notEmpty()
    .withMessage("Number of projects is required"),
  body("num_of_awards")
    .isInt({ min: 0 })
    .withMessage("Number of awards must be a positive integer")
    .notEmpty()
    .withMessage("Number of awards is required"),
  body("services")
    .isArray()
    .withMessage("Services must be an array of service objects")
    .notEmpty()
    .withMessage("Services array cannot be empty"),
  body("services.*.name")
    .isString()
    .withMessage("Service name must be a string")
    .notEmpty()
    .withMessage("Service name is required"),
  body("services.*.case_study")
    .isObject()
    .withMessage("Case study must be an object")
    .notEmpty()
    .withMessage("Case study is required"),
  body("services.*.case_study.title")
    .isString()
    .withMessage("Case study title must be a string")
    .notEmpty()
    .withMessage("Case study title is required"),
  body("services.*.case_study.image")
    .isString()
    .withMessage("Case study image must be a string")
    .notEmpty()
    .withMessage("Case study image is required"),
];

const validateServicesSectionUpdate = [
  body("heading").isString().optional().withMessage("Heading must be a string"),
  body("description")
    .isString()
    .optional()
    .withMessage("Description must be a string"),
  body("num_of_projects")
    .isInt({ min: 0 })
    .optional()
    .withMessage("Number of projects must be a positive integer"),
  body("num_of_awards")
    .isInt({ min: 0 })
    .optional()
    .withMessage("Number of awards must be a positive integer"),
  body("services")
    .isArray()
    .optional()
    .withMessage("Services must be an array of service objects"),
  body("services.*.name")
    .isString()
    .optional()
    .withMessage("Service name must be a string"),
  body("services.*.case_study")
    .isObject()
    .optional()
    .withMessage("Case study must be an object"),
  body("services.*.case_study.title")
    .isString()
    .optional()
    .withMessage("Case study title must be a string"),
  body("services.*.case_study.image")
    .isString()
    .optional()
    .withMessage("Case study image must be a string"),
];

module.exports = {
  validateServicesSectionCreation,
  validateServicesSectionUpdate,
};
