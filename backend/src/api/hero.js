const express = require("express");
const { validationResult } = require("express-validator");
const { verifyToken } = require("../middlewares.js");
const router = express.Router();

const {
  getHeroSection,
  createHeroSection,
  updateHeroSection,
  deleteHeroSection,
} = require("../controllers/hero.controller.js");

const {
  validateHeroSectionCreation,
  validateHeroSectionUpdate,
  validateHeroSectionId,
} = require("../validators/hero.validators.js");

router.get("/", verifyToken, getHeroSection);
router.post("/", verifyToken, validateHeroSectionCreation, createHeroSection);
router.put("/:id", verifyToken, validateHeroSectionUpdate, updateHeroSection);
router.delete("/:id", verifyToken, validateHeroSectionId, deleteHeroSection);

module.exports = router;
