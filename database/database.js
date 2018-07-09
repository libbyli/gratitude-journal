const connection = require('./config');

connection.connect();

const retrievePublicEntries = (user_id, callback) => {
  connection.query(`
  SELECT u.user_name, e.entry_text
  FROM entries e
  INNER JOIN users u
  ON e.user_id = u.user_id
  WHERE e.entry_public = 1
  AND u.user_id NOT IN (${user_id})`,
  (err, results) => {
    if (err) {
      callback(err, null);
    } else {
      callback(null, results);
    }
  });
};

const retrieveUserEntries = (user_id, callback) => {
  connection.query(`SELECT * FROM entries WHERE user_id = ${user_id}`, (err, results) => {
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
    ${req.body.id},
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
  retrievePublicEntries,
  retrieveUserEntries,
  retrieveUser,
  addEntry,
  addUser,
};
