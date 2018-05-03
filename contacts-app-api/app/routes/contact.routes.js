module.exports = (app) => {
  const contacts = require('../controllers/contact.controller.js');

  // Create new Contact
  app.post('/contacts', contacts.create);

  // Fetch all Contacts
  app.get('./contacts', contacts.findAll);

  //Update a Contact with contactId
  app.put('/contacts/:contactId', contacts.update);

  // Delete a Contact with contactId

  app.delete('/contacts/:contactId', contacts.delete);
}
