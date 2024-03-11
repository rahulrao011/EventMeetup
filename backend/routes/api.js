const express = require("express");
const router = express.Router();
const {
  registerUser
} = require('../controllers/registrationController');

// POST @ /register/ (posts to DB)
router.post("/", registerUser);

module.exports = router;