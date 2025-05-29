const express = require("express");
const router = express.Router();
const { uploadMedia, getMediaByEvent } = require("../controllers/galleryController");

router.post("/upload", uploadMedia);
router.get("/event/:eventId", getMediaByEvent);

module.exports = router;
