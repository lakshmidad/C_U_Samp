const Certificate = require("../models/Certificate");

exports.issueCertificate = async (req, res) => {
  try {
    const { studentId, eventId, certificateUrl } = req.body;
    const certificate = new Certificate({ studentId, eventId, certificateUrl });
    await certificate.save();
    res.status(201).json(certificate);
  } catch (err) {
    res.status(500).json({ error: "Failed to issue certificate" });
  }
};

exports.getCertificatesByStudent = async (req, res) => {
  try {
    const { studentId } = req.params;
    const certificates = await Certificate.find({ studentId }).populate("eventId", "title");
    res.json(certificates);
  } catch (err) {
    res.status(500).json({ error: "Failed to get certificates" });
  }
};
