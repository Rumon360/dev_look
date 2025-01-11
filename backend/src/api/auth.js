const express = require("express");
const { validationResult } = require("express-validator");
const { loginValidator } = require("../validators/auth.validators.js");
const { loginUser } = require("../controllers/auth.controller.js");
const router = express.Router();

const ADMIN_CREDENTIALS = {
  email: "admin@example.com",
  password: "password",
};

router.post("/login", loginValidator, (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  loginUser(req, res, next);
});

module.exports = router;
