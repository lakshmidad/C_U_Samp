const mongoose = require("mongoose");

const certificateSchema = new mongoose.Schema({
  studentId: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  eventId: { type: mongoose.Schema.Types.ObjectId, ref: "Event" },
  certificateUrl: String,
  issuedAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model("Certificate", certificateSchema);
