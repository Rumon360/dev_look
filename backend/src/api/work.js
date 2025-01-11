const express = require("express");
const { verifyToken } = require("../middlewares");
const {
  getAllWorkSection,
  createWorkSection,
  updateWorkSection,
  deleteWorkSection,
} = require("../controllers/work.controller.js");
const {
  validateWorkSectionCreation,
  validateWorkSectionUpdate,
  validateWorkSectionId,
} = require("../validators/work.validator.js");

const router = express.Router();

router.get("/", getAllWorkSection);

router.post("/", verifyToken, validateWorkSectionCreation, createWorkSection);

router.put("/", verifyToken, validateWorkSectionUpdate, updateWorkSection);

// router.delete("/:id", verifyToken, validateWorkSectionId, deleteWorkSection);

module.exports = router;
