import React from 'react';
import '../styles/POAddAppointments.css';
import { Link } from 'react-router-dom';


const AddAppointments = () => {
  return (
    <div className="appDate-container">
      
      
      <div className="action">
            <p><u>Select a Date</u></p>
          </div>

          <div className='appoinment-date'>
            <div className="time-slot">
                <select id="time-slot-select">
                    <option value="8-12">8 AM - 12 PM</option>
                    <option value="1-4">1 PM - 4 PM</option>
                    <option value="5-7">5 PM - 7 PM</option>
                </select>
            </div>

            
            <Link to="/Appoinment-Details">
            <button className='next-btn'>Next</button>
            </Link>
      
        
        
      </div>

      

      
    </div>
  );
};

export default AddAppointments;