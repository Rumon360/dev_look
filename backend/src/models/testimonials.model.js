const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const testimonialSchema = new Schema({
  quote: {
    type: String,
    required: true,
  },
  company_name: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
});

const Testimonial = mongoose.model("Testimonial", testimonialSchema);

module.exports = Testimonial;
