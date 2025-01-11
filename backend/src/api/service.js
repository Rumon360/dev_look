const express = require("express");
const { verifyToken } = require("../middlewares");
const {
  getServicesSection,
  createServicesSection,
  updateServicesSection,
  deleteServicesSection,
} = require("../controllers/service.controller.js");
const {
  validateServicesSectionCreation,
  validateServicesSectionUpdate,
} = require("../validators/service.validators.js");
const router = express.Router();

router.get("/", getServicesSection);

router.post(
  "/",
  verifyToken,
  validateServicesSectionCreation,
  createServicesSection
);

router.put(
  "/",
  verifyToken,
  validateServicesSectionUpdate,
  updateServicesSection
);

router.delete("/", verifyToken, deleteServicesSection);

module.exports = router;
