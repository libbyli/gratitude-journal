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

module.exports = { connection, retrieve };
