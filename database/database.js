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

const retrieveUser = (user_id, callback) => {
  connection.query(`SELECT user_name FROM users WHERE user_id = ${user_id}`, (err, results) => {
    if (err) {
      callback(err, null);
    } else {
      callback(null, results);
    }
  });
};

const addEntry = (req, callback) => {
  connection.query(`
  INSERT INTO entries (user_id, entry_text, entry_public, entry_date) 
  VALUES (
    (SELECT user_id FROM users WHERE user_name = "${req.body.name}"),
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

const addUser = (req, callback) => {
  connection.query(`
  INSERT INTO users (user_name)
  VALUES ("${req.body.name}")`,
  (err, results) => {
    if (err) {
      callback(err, null);
    } else {
      callback(null, results);
    }
  });
};

module.exports = {
  connection,
  retrieve,
  retrieveUser,
  addEntry,
  addUser,
};
