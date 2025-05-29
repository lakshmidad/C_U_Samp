const Attendance = require("../models/Attendance");

exports.markAttendance = async (req, res) => {
  try {
    const { studentId, eventId, status } = req.body;
    const attendance = new Attendance({
      studentId,
      eventId,
      attendanceStatus: status,
    });
    await attendance.save();
    res.status(201).json(attendance);
  } catch (err) {
    res.status(500).json({ error: "Failed to mark attendance" });
  }
};

exports.getAttendanceByEvent = async (req, res) => {
  try {
    const { eventId } = req.params;
    const records = await Attendance.find({ eventId }).populate("studentId", "name email");
    res.json(records);
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch attendance" });
  }
};
