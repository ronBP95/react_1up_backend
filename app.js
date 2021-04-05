// Imports
require('dotenv').config()
const express = require('express');
const routes = require('./routes');
const cors = require('cors');
const passport = require('passport');
require('./config/passport')(passport);

// App Set up
const app = express();
const PORT = process.env.PORT || 8000;

// Middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json()); // JSON parsing
app.use(cors()); // allow all CORS requests
app.use(passport.initialize());



// API Routes
app.get('/', (req, res) => {
  res.json("Main Index Get Route is Working!");
});

app.use('/examples', routes.example);
app.use('/user', routes.user);
app.use('/messages', routes.message);
app.use('/instagram', routes.instagram);

// Server
const server = app.listen(PORT, () => console.log(`Server is running on PORT: ${PORT}`));

module.exports = server;
