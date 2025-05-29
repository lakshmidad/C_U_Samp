const express = require("express");
const router = express.Router();
const { markAttendance, getAttendanceByEvent } = require("../controllers/attendanceController");

router.post("/mark", markAttendance);
router.get("/event/:eventId", getAttendanceByEvent);

module.exports = router;
