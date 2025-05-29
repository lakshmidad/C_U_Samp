const mongoose = require("mongoose");

const gallerySchema = new mongoose.Schema({
  eventId: { type: mongoose.Schema.Types.ObjectId, ref: "Event" },
  mediaUrl: String,
  type: { type: String, enum: ["image", "video"], default: "image" },
  uploadedAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model("Gallery", gallerySchema);
