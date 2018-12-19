const express = require('express'); 
const bodyParser = require('body-parser'); 
const morgan = require('morgan'); 
const path = require('path'); 
const port = process.env.PORT || 3000;


const app = express(); 
app.use(express.static(path.join(__dirname, '../client/dist')));

// MIDDLEWARE
app.use(bodyParser.urlencoded({ extended: true})); 
app.use(bodyParser.json()); 
app.use(morgan('dev')); 

// ROUTES


app.listen(port, () => {
  console.log(`Proxy server running at: http://localhost:${port}`);
});




