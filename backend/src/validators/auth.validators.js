const { body } = require("express-validator");

const loginValidator = [
  body("email").isEmail().withMessage("Invalid email format").normalizeEmail(),
  body("password").notEmpty().withMessage("Password is required"),
];

module.exports = { loginValidator };
