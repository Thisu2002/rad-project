const Appointment = require('../models/Appointment'); // Replace with actual path to your Appointment model

exports.getAppointmentsCount = async (req, res) => {
  try {
    const count = await Appointment.countDocuments();
    res.json({ count });
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch appointments count' });
  }
};