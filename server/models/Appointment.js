const mongoose = require('mongoose');

const appointmentSchema = new mongoose.Schema({
  dateTime: { type: Date, required: true },  // Store date and time together
  petOwner: { type: String, required: true },
  petID: { type: String, required: true },
  records: { type: String, default: '' }
}, {
  collection: 'appointment'
});

module.exports = mongoose.model('Appointment', appointmentSchema);
