// Dependencies
const { urlencoded } = require('express');
const express = require('express');
const path = require('path')

// Sets up Express
const app = express();
const port = process.env.PORT || 3000;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }))
app.use(express.json());


//  (ARRAY OF DATA OBJECTS)
// =============================================================

// Routes
// =============================================================


// Starts the server to begin listening
// =============================================================
app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });
  