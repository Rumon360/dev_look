const express = require("express");
const { verifyToken } = require("../middlewares");
const {
  getAboutSection,
  createAboutSection,
  updateAboutSection,
  deleteAboutSection,
} = require("../controllers/about.controller.js");
const {
  validateAboutSectionCreation,
  validateAboutSectionUpdate,
} = require("../validators/about.validator.js");

const router = express.Router();

router.get("/", verifyToken, getAboutSection);

router.post("/", verifyToken, validateAboutSectionCreation, createAboutSection);

router.put("/", verifyToken, validateAboutSectionUpdate, updateAboutSection);

router.delete("/", verifyToken, deleteAboutSection);

module.exports = router;
