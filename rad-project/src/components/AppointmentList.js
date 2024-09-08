import React, { useState, useEffect } from 'react';
import '../styles/AppointmentList.css';

const AppointmentList = () => {
  const [appointments, setAppointments] = useState([]);

  useEffect(() => {
    fetchAppointments();
  }, []);

  const fetchAppointments = async () => {
    try {
      const response = await fetch("http://localhost:5000/appointments/today"); // Adjust endpoint as needed
      const data = await response.json();
      setAppointments(data.appointments); // Adjust based on API response structure
    } catch (error) {
      console.error("Error fetching appointments:", error);
    }
  };

  // Helper function to format date and time
  const formatDateTime = (dateTime) => {
    const date = new Date(dateTime);
    const formattedDate = date.toLocaleDateString(); // Format date (e.g., 9/8/2024)
    const formattedTime = date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }); // Format time (e.g., 08:15 AM)
    return { formattedDate, formattedTime };
  };

  // Helper function to check if appointment is for today
  const isToday = (dateTime) => {
    const appointmentDate = new Date(dateTime);
    const today = new Date();
    return (
      appointmentDate.getDate() === today.getDate() &&
      appointmentDate.getMonth() === today.getMonth() &&
      appointmentDate.getFullYear() === today.getFullYear()
    );
  };

  // Filter appointments for today
  const todayAppointments = appointments.filter(appointment => isToday(appointment.dateTime));

  return (
    <div className="appointment-list">
      <div className="header">
        <h3>Today's Appointments</h3>
      </div>
      
      <ul>
        {todayAppointments.map((appointment, index) => {
          const { formattedDate, formattedTime } = formatDateTime(appointment.dateTime);
          return (
            <li key={index} >
              <div className="appointment-details">
                <p>{appointment.petOwner}</p>
              </div>
              <div className="appointment-time">
                <span>{formattedDate}</span> {/* Display formatted date */}
                <span>{formattedTime}</span> {/* Display formatted time */}
                {appointment.status && <span className="status">{appointment.status}</span>}
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default AppointmentList;