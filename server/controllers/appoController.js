const Appointment = require('../models/Appointment');

const appointment = async (req, res) => {
    const { date, time, petID, petName, cNo } = req.body;

    try {
        const appointment = new Appointment({
          date,
          time,
          petId,
          petName,
          cNo
        });
        const savedAppointment = await appointment.save();

        res.status(201).json({ message: 'Appointment submitted successfully!',
            appointment: savedAppointment
         });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Server error' });
    }
};

module.exports = {
    appointment
};

