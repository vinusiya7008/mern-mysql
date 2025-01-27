const db = require('../config/db');

const createUsersTable = () => {
  const sql = `
    CREATE TABLE IF NOT EXISTS users (
      id INT AUTO_INCREMENT PRIMARY KEY,
      first_name VARCHAR(255) NOT NULL,
      last_name VARCHAR(255) NOT NULL,
      username VARCHAR(255) NOT NULL UNIQUE,
      email VARCHAR(255) NOT NULL UNIQUE,
      password VARCHAR(255) NOT NULL,
      add_date DATETIME DEFAULT CURRENT_TIMESTAMP,
      edit_date DATETIME ON UPDATE CURRENT_TIMESTAMP,
      status TINYINT DEFAULT 1,
      last_activity DATETIME DEFAULT NULL
    )
  `;
  db.query(sql, (err, result) => {
    if (err) {
      console.error('Error creating users table:', err);
    } else {
      console.log('Users table created or already exists');
    }
  });
};

module.exports = { createUsersTable };
