const express = require ('express');

const bodyParser = require ('body-parser');

//creates an express application
const app = express();

//parse through requests of content-type  application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true}))

//parse through requests of content-type  application/json

app.use(bodyParser.json())

// Configure database
const dbConfig = require('./config/database.config.js');
const mongoose = require('mongoose');

mongoose.Promise = global.Promise;

// Connecting to the database
mongoose.connect(dbConfig.url)
.then(() => {
    console.log("Successfully connected to database");
}).catch(err => {
    console.log('Failed connection to databas. Exiting now');
    process.exit();
});

//define simple route
app.get('/', (req, res) => {
  res.json({"message": "Welcome to Andrew Z Contacts Application Submission"});
});

// Require Contacts routes
require('./app/routes/contact.routes.js')(app);

// Listen for requests
app.listen(3000, () => {
  console.log("Sever is listening on port 3000");
});
