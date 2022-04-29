const express = require('express');
const router = express.Router();
const messageController = require("./../controllers/messages");

//!!
router.get("/ap", messageController.getAll);
router.get("/", messageController.get);
router.get("/:id", messageController.getId);
router.post("/", messageController.create);
router.put("/:id", messageController.update);

module.exports = router;