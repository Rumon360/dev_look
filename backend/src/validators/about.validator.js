const { body } = require("express-validator");

const validateAboutSectionCreation = [
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
  body("years_on_the_market")
    .isInt({ min: 0 })
    .withMessage("Years on the market must be a positive integer")
    .notEmpty()
    .withMessage("Years on the market is required"),
  body("num_of_customers")
    .isInt({ min: 0 })
    .withMessage("Number of customers must be a positive integer")
    .notEmpty()
    .withMessage("Number of customers is required"),
  body("banner")
    .isString()
    .withMessage("Banner must be a string")
    .notEmpty()
    .withMessage("Banner is required"),
  body("heading_two")
    .isString()
    .withMessage("Second heading must be a string")
    .notEmpty()
    .withMessage("Second heading is required"),
  body("marquee")
    .isString()
    .withMessage("Marquee text must be a string")
    .notEmpty()
    .withMessage("Marquee is required"),
];

const validateAboutSectionUpdate = [
  body("heading").isString().optional().withMessage("Heading must be a string"),
  body("description")
    .isString()
    .optional()
    .withMessage("Description must be a string"),
  body("years_on_the_market")
    .isInt({ min: 0 })
    .optional()
    .withMessage("Years on the market must be a positive integer"),
  body("num_of_customers")
    .isInt({ min: 0 })
    .optional()
    .withMessage("Number of customers must be a positive integer"),
  body("banner").isString().optional().withMessage("Banner must be a string"),
  body("heading_two")
    .isString()
    .optional()
    .withMessage("Second heading must be a string"),
  body("marquee")
    .isString()
    .optional()
    .withMessage("Marquee text must be a string"),
];

module.exports = {
  validateAboutSectionCreation,
  validateAboutSectionUpdate,
};
