const mongoose = require('mongoose');

const ContactSchema = mongoose.Schema({
  name: String,
  number: String,
  address: String,
  company: String,
  birthdate: String,
  email: String,
}, {
  timestamps: true
});

module.exports = mongoose.model('Contact', ContactSchema);
