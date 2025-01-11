const express = require("express");
const auth = require("./auth");
const hero = require("./hero");
const work = require("./work");
const service = require("./service");
const testimonial = require("./testimonial");
const about = require("./about");

const router = express.Router();

router.get("/", (req, res) => {
  res.json({
    message: "API - 👋🌎🌍🌏",
  });
});

router.use("/auth", auth);
router.use("/hero", hero);
router.use("/work", work);
router.use("/service", service);
router.use("/testimonial", testimonial);
router.use("/about", about);

module.exports = router;
