import React, { useEffect, useState } from 'react';
import "../styles/AppointmentDetails.css";

const AppointmentDetails = () => {
  const [appointment, setAppointment] = useState({
    appointmentNo: "",
    petID: "",
    petName: "",
    petOwnerName: "",
    date: "",
    time: "",
  });

  return (
    <div className="appointment-details-container">
        <h2 className="section-title">Appointment Details</h2>
        <hr className="sub-heading-hr" />
        <div className="appointment-info">
          <p>Appointment No: <span>{appointment.appointmentNo}</span></p>
          <p>Pet ID: <span>{appointment.petID}</span></p>
          <p>Pet's Name: <span>{appointment.petName}</span></p>
          <p>Pet Owner’s Name: <span>{appointment.petOwnerName}</span></p>
          <p>Date: <span>{appointment.date}</span></p>
          <p>Estimated Time: <span>{appointment.time}</span></p>
        </div>
        <button className="confirm-button">Confirm</button>
      </div>
  );
};

export default AppointmentDetails;
