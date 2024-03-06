const express = require("express");
const router = express.Router();

router.post('/', (req, res) => {}); // /register/ (posts to DB)
router.get('/:eventId', (req, res) => {}); // /register/:eventId (fetches from DB)

module.exports = router;