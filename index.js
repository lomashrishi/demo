// index.js
const express = require('express');
const path = require('path');
const app = express();
const port = 3000;

// Set EJS as the view engine
app.set('view engine', 'ejs');
// Set the views directory
app.set('views', path.join(__dirname, 'views'));

// Define a route to render the HTML page
app.get('/', (req, res) => {
  res.render('index');
});



// route for lomash
app.get('/rishi', (req, res) => {
  res.render('lomash');
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
