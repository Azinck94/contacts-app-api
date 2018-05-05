const mongoose = require('mongoose');

const ContactSchema = mongoose.Schema({
  name: String,
  number: {
      work: String,
      personal: String
    },
  address: {
      number: String,
      street: String,
      state: String,
      zip: String,
    },
  company: String,
  birthdate: String,
  email: String,
}, {
  timestamps: true
});

module.exports = mongoose.model('Contact', ContactSchema);
