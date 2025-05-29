const attendanceRoutes = require("./routes/attendanceRoutes");
const certificateRoutes = require("./routes/certificateRoutes");
const leaderboardRoutes = require("./routes/leaderboardRoutes");
const galleryRoutes = require("./routes/galleryRoutes");
const forumRoutes = require("./routes/forumRoutes");

// Add these in app.use()
app.use("/api/attendance", attendanceRoutes);
app.use("/api/certificates", certificateRoutes);
app.use("/api/leaderboard", leaderboardRoutes);
app.use("/api/gallery", galleryRoutes);
app.use("/api/forum", forumRoutes);
