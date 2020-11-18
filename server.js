// Creating Data endpoint for our site
const projectData = {};
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
  const body = req.body;

  projectData.temp = req.body.temp;
  projectData.date = req.body.date;
  projectData.content = req.body.content;
  
  console.log(projectData);
}

app.get('/all', getInfo);

function getInfo(req, res) {
  res.send(projectData);
}

// Setting Up Localserver
const port = 8000;
const server = app.listen(port, () => {console.log(`the server is running in port: ${port}`)});