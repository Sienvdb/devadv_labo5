const express = require('express');
const router = express.Router();
const messageController = require("./../controllers/messages");

router.get("/", messageController.getAll);
router.get("/ap", messageController.get);

module.exports = router;