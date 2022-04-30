const express = require('express');
const router = express.Router();
const messageController = require("./../controllers/messages");

router.get("/", messageController.getAll);
router.get("/:id", messageController.getId);
router.post("/", messageController.create);
router.put("/:id", messageController.update);
router.delete("/:id", messageController.remove);

module.exports = router;