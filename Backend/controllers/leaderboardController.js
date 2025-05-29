const Attendance = require("../models/Attendance");

exports.getLeaderboard = async (req, res) => {
  try {
    const leaderboard = await Attendance.aggregate([
      { $match: { attendanceStatus: "Present" } },
      { $group: { _id: "$studentId", totalEvents: { $sum: 1 } } },
      { $sort: { totalEvents: -1 } },
      { $limit: 10 }
    ]);
    res.json(leaderboard);
  } catch (err) {
    res.status(500).json({ error: "Failed to get leaderboard" });
  }
};
