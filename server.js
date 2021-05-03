// Setup empty JS object to act as endpoint for all routes
let weatherData = {};

// Require Express to run server and routes
const express = require('express');

// Start up an instance of app
const app = express();

/* Middleware*/
const bodyParser = require('body-parser');

//Here we are configuring express to use body-parser as middle-ware.
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Cors for cross origin allowance
const cors = require('cors');
app.use(cors());

// Initialize the main project folder
app.use(express.static('website'));

// Setup Server
const port = 5555;
const server = app.listen(port, ()=> {

        console.log(`server running on localhost: ${port}`);
});
//function get data
app.get('/all',getData);
function getData (req, res) {
  res.send(weatherData);
}

// Post data
app.post('/add',addData);


 function addData(req, res) {
  weatherData['date'] = req.body.date;
  weatherData['temp'] = req.body.temp;
  weatherData['content'] = req.body.content;
  res.send(weatherData);
}