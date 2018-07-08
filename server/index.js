const express = require('express');
const path = require('path');
const db = require('../database/index');

const app = express();
const port = process.env.port || 8000;

app.use(express.json());

app.use(express.static(path.join(__dirname, '/../client/dist')));

app.get('/entries', (req, res) => {
  db.retrieve((err, results) => {
    if (err) { res.status(500).send('Error in retrieving entries'); }
    res.status(200).json(results);
  });
});

app.get('/users/:username', (req, res) => {
  let username = req.params.username;
  db.retrieveUser(username, (err, results) => {
    if (err) { res.status(500).send('Error in retrieving user'); }
    res.status(200).json(results);
  });
});

app.post('/entries', (req, res) => {
  db.addEntry(req, (err, results) => {
    if (err) { res.status(500).send('Error in posting entry'); }
    res.status(201).json(results);
  });
});

app.post('/users', (req, res) => {
  db.addUser(req, (err, results) => {
    if (err) { res.status(500).send('Error in adding user'); }
    res.status(201).json(results);
  });
});

app.listen(port, () => console.log(`listening on port ${port}!`));
