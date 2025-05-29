const Gallery = require("../models/Gallery");

exports.uploadMedia = async (req, res) => {
  try {
    const { eventId, mediaUrl, type } = req.body;
    const media = new Gallery({ eventId, mediaUrl, type });
    await media.save();
    res.status(201).json(media);
  } catch (err) {
    res.status(500).json({ error: "Failed to upload media" });
  }
};

exports.getMediaByEvent = async (req, res) => {
  try {
    const { eventId } = req.params;
    const media = await Gallery.find({ eventId });
    res.json(media);
  } catch (err) {
    res.status(500).json({ error: "Failed to get media" });
  }
};
