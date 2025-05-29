const express = require("express");
const router = express.Router();
const { issueCertificate, getCertificatesByStudent } = require("../controllers/certificateController");

router.post("/issue", issueCertificate);
router.get("/student/:studentId", getCertificatesByStudent);

module.exports = router;
