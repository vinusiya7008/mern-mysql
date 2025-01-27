const express = require('express');
const db = require('../config/db');
const router = express.Router();

// Get user profile
router.get('/profile', (req, res) => {
  if (!req.session.user) {
    return res.status(401).json({ message: 'Unauthorized access' });
  }
  const { id } = req.session.user;
  const sql = `
    SELECT id, first_name, last_name, username, email, status, last_activity
    FROM users WHERE id = ?
  `;
  db.query(sql, [id], (err, results) => {
    if (err || results.length === 0) {
      return res.status(404).json({ message: 'User not found' });
    }
    res.json(results[0]);
  });
});

module.exports = router;
