const express = require("express");
const router = express.Router();
const { createPost, getPostsByEvent } = require("../controllers/forumController");

router.post("/create", createPost);
router.get("/event/:eventId", getPostsByEvent);

module.exports = router;
