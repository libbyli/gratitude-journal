const connection = require('./config');

connection.connect();

const retrieve = (callback) => {
  connection.query('SELECT * FROM entries', (err, results) => {
    if (err) {
      callback(err, null);
    } else {
      callback(null, results);
    }
  });
};

const postEntry = (req, callback) => {
  connection.query(`
  INSERT INTO entries (user_id, entry_text, entry_public, entry_date) 
  VALUES (
    (SELECT user_id FROM users WHERE username = "${req.body.username}"),
    "${req.body.entry}",
    ${req.body.public},
    CURDATE())`,
  (err, results) => {
    if (err) {
      callback(err, null);
    } else {
      callback(null, results);
    }
  });
};

module.exports = { connection, retrieve, postEntry };
