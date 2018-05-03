const express = require ('express');

const bodyParser = require ('body-parser');

//creates an express application
const app = express();

//parse through requests of content-type  application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true}))

//parse through requests of content-type  application/json

app.use(bodyParser.json())

//define simple route

app.get('/', (req, res) => {
  res.json({"message": "Welcome to Andrew Z Contacts Application Submission"});
});

//listen for requests
app.listen(3000, () => {
  console.log("Sever is listening on port 3000");
});
