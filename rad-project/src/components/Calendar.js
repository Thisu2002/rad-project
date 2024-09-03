import React, { useState, useEffect } from 'react';
import '../styles/Calendar.css';

const Calendar = () => {
  const [currentMonth, setCurrentMonth] = useState(new Date().getMonth());
  const [currentYear, setCurrentYear] = useState(new Date().getFullYear());
  const [days, setDays] = useState([]);

  const today = new Date();
  const todayDate = today.getDate();
  const todayMonth = today.getMonth();
  const todayYear = today.getFullYear();

  const months = [
    'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
    'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'
  ];

  useEffect(() => {
    generateCalendar(currentMonth, currentYear);
  }, [currentMonth, currentYear]);

  const generateCalendar = (month, year) => {
    const firstDay = new Date(year, month).getDay();
    const daysInMonth = new Date(year, month + 1, 0).getDate();
    const prevMonthDays = new Date(year, month, 0).getDate();

    const calendarDays = [];
    let date = 1;
    let nextMonthDate = 1;

    for (let i = 0; i < 6; i++) {
      const week = [];

      for (let j = 0; j < 7; j++) {
        if (i === 0 && j < firstDay) {
          week.push({
            day: prevMonthDays - (firstDay - j - 1),
            inactive: true,
          });
        } else if (date > daysInMonth) {
          week.push({
            day: nextMonthDate,
            inactive: true,
          });
          nextMonthDate++;
        } else {
          week.push({
            day: date,
            inactive: false,
            isToday: date === todayDate && month === todayMonth && year === todayYear,
          });
          date++;
        }
      }

      calendarDays.push(week);
    }

    setDays(calendarDays);
  };

  const handlePrevMonth = () => {
    setCurrentMonth((prevMonth) => {
      if (prevMonth === 0) {
        setCurrentYear((prevYear) => prevYear - 1);
        return 11;
      }
      return prevMonth - 1;
    });
  };

  const handleNextMonth = () => {
    setCurrentMonth((prevMonth) => {
      if (prevMonth === 11) {
        setCurrentYear((prevYear) => prevYear + 1);
        return 0;
      }
      return prevMonth + 1;
    });
  };

  return (
    <div className="calendar-container">
      <div className="calendar-nav">
        <button onClick={handlePrevMonth}>&lt;</button>
        <span id="monthYear">{`${months[currentMonth]} ${currentYear}`}</span>
        <button onClick={handleNextMonth}>&gt;</button>
      </div>

      <table className="calendar-table">
        <thead>
          <tr>
            <th>S</th>
            <th>M</th>
            <th>T</th>
            <th>W</th>
            <th>T</th>
            <th>F</th>
            <th>S</th>
          </tr>
        </thead>
        <tbody id="calendar-body">
          {days.map((week, index) => (
            <tr key={index}>
              {week.map((day, index) => (
                <td
                  key={index}
                  className={`${day.inactive ? 'inactive' : ''} ${day.isToday ? 'today' : ''}`}
                >
                  {day.day}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Calendar;
