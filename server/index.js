const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const db = require('../database/index');

const app = express();
const port = process.env.port || 8000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static(path.join(__dirname, '/../client/dist')));

app.listen(port, () => console.log(`listening on port ${port}!`));

app.get('/entries', (req, res) => {
  db.retrieve((err, results) => {
    if (err) { res.status(500).send('Error in retrieving entries'); }
    res.status(200).json(results);
  });
});
