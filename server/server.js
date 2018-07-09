const express = require('express');
const path = require('path');
const db = require('../database/database');

const app = express();
const port = process.env.port || 8000;

app.use(express.json());

app.use(express.static(path.join(__dirname, '/../client/dist')));

app.get('/entries/:username', (req, res) => {
  let username = req.params.username;
  db.retrieve(username, (err, results) => {
    if (err) {
      res.status(500).json('Error in retrieving entries');
    } else {
      res.status(200).json(results);
    }
  });
});

app.get('/users/:id', (req, res) => {
  let user_id = req.params.id;
  db.retrieveUser(user_id, (err, results) => {
    if (err) {
      res.status(500).json('Error in retrieving user');
    } else {
      res.status(200).json(results);
    }
  });
});

app.post('/entries', (req, res) => {
  db.addEntry(req, (err, results) => {
    if (err) {
      res.status(500).json('Error in posting entry');
    } else {
      res.status(201).json(results);
    }
  });
});

app.post('/users', (req, res) => {
  db.addUser(req, (err, results) => {
    if (err) {
      res.status(201).json('Duplicate user');
    } else {
      res.status(201).json(results.insertId);
    }
  });
});

app.listen(port, () => console.log(`listening on port ${port}!`));
