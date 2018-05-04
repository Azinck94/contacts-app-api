const Contact = require('../models/contact.model.js');

// Create and Save a new Contacts
exports.create = (req, res) => {
// Validates a request
if(!req.body.content) {
  return res.status(400).send({
    message: "Contact content not filled"
  });
}
// Create new Contact
const contact = new Contact({
  name: req.body.name,
  number: req.body.name,
  birthdate: req.body.name,
  company: req.body.name
});

// Save Contact
contact.save()
.then(data => {
  res.send(data);
}).catch(err => {
  res.status(500).send({
    message: err.message || "Error occurred during contact creation"
  });
});
};

// Retrieve and return all contacts from the db
exports.findAll = (req, res) => {
  Contact.find()
  .then(contacts => {
    res.send(contacts);
  }).catch(err => {
    res.status(500).send({
      message: err.message || "Error occured while fetching contacts"
    });
  });
};

// Find a single contact with a contactId
exports.findOne = (req, res) => {
  Contact.findOne = (req.params.contactId)
  .then(contact => {
    if(!contact) {
        return res.status(404).send({
          message: "Unable to find contact " + req.params.contactId
        });
    }
    res.send(contact);
  }).catch(err => {
      if(err.kind === 'ObjectId') {
        return res.status(404).send({
          message: "Unable to find contact " + req.params.contactId
        });
      }
      return res.status(500).send({
          message: "Error retrieving contact with id " + req.params.contactId
      });
  });
};

// Update a contact identified by the contactId in the request
exports.update = (req, res) => {

};

// Delete a contact with the specified contactId in the request
exports.delete = (req, res) => {

};
