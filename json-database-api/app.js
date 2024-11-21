const express = require('express');
const fs = require('fs');
const app = express();
const port = process.env.PORT || 3000;

// Load the JSON database
const database = require('./database.json');

// Endpoint to get all users
app.get('/users', (req, res) => {
  res.json(database.users);
});

// Endpoint to get all posts
app.get('/posts', (req, res) => {
  res.json(database.posts);
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
