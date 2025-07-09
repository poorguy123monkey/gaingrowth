require('dotenv').config(); // Reads .env file
const express = require('express');
const router = express.Router();

const API_KEY = process.env.API_KEY;

// ✅ Test route to check if API key loads
router.get('/api/check-key', (req, res) => {
  res.json({ apiKey: API_KEY ? '✅ Key is loaded' : '❌ Key not found' });
});

// Example ping route
router.get("/api/ping", (req, res) => {
  res.json({ message: "pong" });
});

// ✅ Always export the router LAST
module.exports = router;
