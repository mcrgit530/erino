
const mongoose = require('mongoose');

const contactSchema = new mongoose.Schema({
  firstName: String,
  lastName: String,
  email: { type: String, required: true },
  phoneNumber: { type: String, required: true },
  company: String,
  jobTitle: String
});

module.exports = mongoose.model('Contact', contactSchema);
