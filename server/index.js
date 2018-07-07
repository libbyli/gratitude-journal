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

app.post('/entries', (req, res) => {
  db.postEntry(req, (err, results) => {
    if (err) { res.status(500).send('Error in posting entries'); }
    res.status(201).json(results);
  });
});

app.listen(port, () => console.log(`listening on port ${port}!`));
