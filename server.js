// Express to run server and routes 
const express = require('express');
// Instantiate web app
const app = express ();
/* Dependencies */
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
// Allow for Cross Origin Sharing 
const cors = require('cors');
app.use(cors());
/* Initializing the main project folder */

