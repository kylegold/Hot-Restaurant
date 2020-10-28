// Dependencies
const { timeStamp } = require('console');
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
const reservations = [
  {
    name: "kyle test",
    phone: 5550005555,
    email: 'kyle@test.com',
    id: 0,
  },
  {
    name: "kyle firth test",
    phone: 5550005555,
    email: 'kyle@test.com',
    id: 0,
  },
  {
    name: "second test",
    phone: 5550005555,
    email: 'kyle@test.com',
    id: 0,
  },
  {
    name: "third test",
    phone: 5550005555,
    email: 'kyle@test.com',
    id: 0,
  },
  {
    name: "fourth test",
    phone: 5550005555,
    email: 'kyle@test.com',
    id: 0,
  }
]

const waitlist = [
  {
    name: "waitlist test",
    phone: 5550005555,
    email: 'kyle@test.com',
    id: 0,
  }
]

// Routes
// =============================================================

// create basic route structure

// index page
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, "index.html"))
})

// view reservations
app.get('/reservations', (req, res) => {
  res.sendFile(path.join(__dirname, "resview.html"))
})

// add reservations
app.get('/add-reservation', (req, res) => {
  res.sendFile(path.join(__dirname, "resform.html"))
})

// display all reservation objects
app.get('/api/reservations', (req, res) => {
  res.json(reservations)
})

// display all reservation objects
app.get('/api/waitlist', (req, res) => {
  res.json(waitlist)
})

app.post('/api/reservations', (req, res) => {
  const newReservation = req.body

  if (reservations.length > 5) {
    waitlist.push(newReservation)
  }
  else {
    reservations.push(newReservation)
  }
})

// Starts the server to begin listening
// =============================================================
app.listen(port, function() {
    console.log("App listening on PORT " + port);
  });
  