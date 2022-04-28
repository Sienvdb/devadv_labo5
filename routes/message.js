const express = require('express');
const router = express.Router();
const messageController = require("./../controllers/messages");

router.get("/", messageController.getAll);

module.exports = router;