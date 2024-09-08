import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import '../styles/VetDash.css';
import vetdash from '../images/vetdash.png'; // Import the image

const VetDash = () => {
  const [appointments, setAppointments] = useState([]);

  useEffect(() => {
    async function fetchAppointments() {
      try {
        const response = await fetch('http://localhost:5000/todays-appointments');
        const data = await response.json();
        setAppointments(data);
      } catch (error) {
        console.error('Error fetching appointments:', error);
      }
    }

    fetchAppointments();
  }, []);

  // Function to format time
  const formatTime = (timeString) => {
    const date = new Date(timeString); // Convert to Date object
    return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', hour12: true }); // Format as 'HH:MM AM/PM'
  };

  return (
    <div className='vetdash-container'>
      <div className="vetdash-content">
        <div className="vetdash-session">
          <h2>Today's Appointments</h2>
          <div className="vetsession-details">
            {/* Appointments Box */}
            <div className="vetappointments-box">
              {appointments.length > 0 ? (
                appointments.map((appointment) => (
                  <NavLink 
                    to={`/vet-appointments/${appointment.petID}`} // Link to pet details page
                    className="vetappointment-link" 
                    key={appointment.petID}
                  >
                    <div className="vetappointment">
                      <p><strong>Pet Owner:</strong> {appointment.petOwner}</p>
                      <p><strong>Time:</strong> {formatTime(appointment.dateTime)}</p> {/* Format time here */}
                    </div>
                  </NavLink>
                ))
              ) : (
                <p>No appointments for today</p>
              )}
            </div>
          </div>
        </div>

        {/* Image outside the session box */}
        <div className="vetsession-image">
          <img src={vetdash} alt="Vetdash" />
        </div>
      </div>
    </div>
  );
};

export default VetDash;
