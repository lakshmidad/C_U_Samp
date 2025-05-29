const mongoose = require("mongoose");

const forumPostSchema = new mongoose.Schema({
  eventId: { type: mongoose.Schema.Types.ObjectId, ref: "Event" },
  studentId: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  content: String,
  postedAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model("ForumPost", forumPostSchema);
