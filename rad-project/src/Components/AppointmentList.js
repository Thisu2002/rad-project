import React from 'react';
import '../styles/AppointmentList.css';

const AppointmentList = () => {
  const appointments = [
    { name: 'Luna', type: 'Dog', time: '08:15 am', status: 'Ongoing' },
    { name: 'Luna', type: 'Dog', time: '09:00 am', status: '' },
    { name: 'Luna', type: 'Dog', time: '10:30 am', status: '' },
    { name: 'Luna', type: 'Dog', time: '10:45 am', status: '' },
    { name: 'Luna', type: 'Dog', time: '11:15 am', status: '' }
  ];

  return (
    <div className="appointment-list">
      <h3>Today's Appointments</h3>
      <ul>
        {appointments.map((appointment, index) => (
          <li key={index} className={appointment.status === 'Ongoing' ? 'ongoing' : ''}>
            <div className="appointment-details">
              <p>{appointment.name}</p>
              <span>{appointment.type}</span>
            </div>
            <div className="appointment-time">
              <span>{appointment.time}</span>
              {appointment.status && <span className="status">{appointment.status}</span>}
            </div>
          </li>
        ))}
      </ul>
      <a href="#">See all</a>
    </div>
  );
};

export default AppointmentList;
