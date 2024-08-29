const express = require('express');
const mongoose = require('mongoose');

const usersRouter = require('./routes/userAPI');

// require('dotenv').config(); //for using variables from .env file.
require('./config/config');

console.log(process.env.NODE_ENV);

console.log(process.env.MONGODB_URL);

// Set up the express app
const app = express(); //instantiates the express object
const port = process.env.PORT || 3000; //app runs on localhost:3000 in the development environment

// Allows us to accept the data in JSON format
app.use(express.json());


mongoose.connect(process.env.MONGODB_URL).then(() => {
  console.log("MongoDB is connected!");
});


// Start the server
//app.listen(port, () => console.log(`Server started on port ${port}`));

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.use('/users', usersRouter);

app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});