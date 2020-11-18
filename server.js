// Creating Data endpoint for our site
const appData = [];
// Express to run server and routes 
const express = require('express');
// Instantiate web app
const app = express();
/* Dependencies */
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
// Allow for Cross Origin Sharing 
const cors = require('cors');
app.use(cors());
/* Initializing the main project folder */
app.use(express.static('journal'));

app.post('/add', addInfo);

function addInfo(req,res){

  newEntry = {
    date: req.body.date,
    temp: req.body.temp,
    content: req.body.content
  }

  appData.push(newEntry)
  console.log(appData)
}

app.get('/all', getInfo);

function getInfo(req, res) {
  res.send(appData);
}

// Setting Up Localserver
const port = 8000;
const server = app.listen(port, () => {console.log(`the server is running in port: ${port}`)});