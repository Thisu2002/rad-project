const Appointment = require('../models/Appointment');


// Get all appointments
exports.getAllAppointments = async (req, res) => {
  try {
    const appointments = await Appointment.find({});
    res.json(appointments);
  } catch (error) {
    res.status(500).json({ error: 'Server error. Please try again later.' });
  }
};

// Add a record to a specific appointment
exports.addRecordToAppointment = async (req, res) => {
  const { appointmentId } = req.params;
  const { command } = req.body;

  try {
    const appointment = await Appointment.findById(appointmentId);

    if (!appointment) {
      return res.status(404).json({ message: 'Appointment not found' });
    }
    
    // Only set the record if it’s currently empty
    if (!appointment.records || appointment.records.trim() === '') {
      appointment.records = command;
      await appointment.save();
      res.json({ message: 'Record added successfully!' });
    } else {
      res.status(400).json({ message: 'Record already exists for this appointment' });
    }
  } catch (error) {
    console.error('Error adding record:', error);
    res.status(500).json({ message: 'Server error' });
  }
};

// Get records for a specific appointment
exports.getRecordsForAppointment = async (req, res) => {
  try {
    const appointment = await Appointment.findById(req.params.appointmentId);
    if (!appointment) {
      return res.status(404).json({ message: 'Appointment not found' });
    }
    console.log(appointment);
    res.json(appointment);
  } catch (error) {
    console.error('Error fetching records:', error);
    res.status(500).json({ message: 'Server error' });
  }
};

exports.updateAppointmentRecord = async (req, res) => {
  try {
    const appointmentId = req.params.appointmentId; // Ensure this is a valid ObjectId
    const updatedRecord = req.body.newRecord;

    // Assuming you are using Mongoose's findByIdAndUpdate
    const result = await Appointment.findByIdAndUpdate(
      appointmentId,
      { $set: { records: updatedRecord } },
      { new: true }
    );

    if (!result) {
      return res.status(404).json({ message: 'Appointment not found' });
    }

    res.json({ message: 'Record updated successfully', result });
  } catch (error) {
    console.error('Error updating record:', error);
    res.status(500).json({ message: 'Server error' });
  }
};


//Get upcoming appointments
exports.getUpcomingAppointments = async (req, res) => {
  try {
    // Get the current date
    const now = new Date();
    console.log("Fetching appointments from:", now);
    
    // Find appointments with a date greater than the current date and time
    const appointments = await Appointment.find({ date: { $gte: now } });
    console.log("Found appointments:", appointments);


    res.json(appointments);
  } catch (error) {
    console.error('Error fetching upcoming appointments:', error);
    res.status(500).json({ message: 'Server error' });
  }
};


// Delete a record from a specific appointment
exports.deleteAppointmentRecord = async (req, res) => {
  const { appointmentId } = req.params;

  try {
    const appointment = await Appointment.findById(appointmentId);

    if (!appointment) {
      return res.status(404).json({ message: 'Appointment not found' });
    }

    appointment.records = ''; // Clear the records field
    await appointment.save();
    res.json({ message: 'Record deleted successfully!' });
  } catch (error) {
    console.error('Error deleting record:', error);
    res.status(500).json({ message: 'Server error' });
  }
};

// Function to get today's appointments
exports.getTodaysAppointments = async (req, res) => {
  try {
    const today = new Date();
    const startOfDay = new Date(today.getFullYear(), today.getMonth(), today.getDate());
    const endOfDay = new Date(today.getFullYear(), today.getMonth(), today.getDate() + 1);

    const appointments = await Appointment.find({
      date: {
        $gte: startOfDay,
        $lt: endOfDay
      }
    });

    res.json(appointments);
  } catch (error) {
    console.error('Error fetching today\'s appointments:', error);
    res.status(500).json({ message: 'Server error' });
  }
};
