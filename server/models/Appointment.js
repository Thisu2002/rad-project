const mongoose = require('mongoose');

const AppointmentSchema = new mongoose.Schema({
  date: {
    type: Date,
    required: true
  },
  time: {
    type: String,
    required: true
  },
  petId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Pet',
    required: true
  },
  petName: {
    type: String,
    required: true
  },
  cNo: {
    type: Number,
    required: true
  }
}, {
    collection: 'appointment' // Explicitly defining the collection name
  });

module.exports = mongoose.model('Appointment', AppointmentSchema);
