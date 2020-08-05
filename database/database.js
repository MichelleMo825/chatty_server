const sqlite3 = require('sqlite3').verbose();

exports.db = new sqlite3.Database('../db/chatty.db', (err) => {
  if (err) {
    console.error(err.message);
  }
  console.log('Connected to the chatty database.');
});
