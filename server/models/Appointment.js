const mongoose = require('mongoose');

const appointmentSchema = new mongoose.Schema({
  date: { type: Date, required: true },
  time: { type: String, required: true },
  petOwner: { type: String, required: true },
  petID: { type: String, required: true, unique: true },
  records: { type: String, default: ''}
}, {
  collection: 'Appointment'
});

module.exports = mongoose.model('Appointment', appointmentSchema);