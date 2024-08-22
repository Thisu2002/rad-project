import React from 'react';
import '../styles/Calendar.css';

const Calendar = () => {
  return (
    <div className="calendar-container">
      <h3>June 2024</h3>
      <div className="calendar-grid">
        {/* A simple grid-based calendar layout */}
        <div className="calendar-day">Sun</div>
        <div className="calendar-day">Mon</div>
        <div className="calendar-day">Tue</div>
        {/* Repeat for all days of the week */}
        {/* Add dates as well */}
      </div>
    </div>
  );
};

export default Calendar;
