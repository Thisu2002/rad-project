import React from 'react';
import '../styles/POAppoinments.css';
import profileImage from '../images/profileImg.png';
import { Link } from 'react-router-dom';

const Appoinments = () => {
    return (
        <div className="dashboard-container">
          
          <div className="dashboard-header">
              <h1>Appoinments</h1>
              <div className="profile-info">
                  <img src={profileImage} alt="Profile" className="profile-img" />
                  <div className="profile-details">
                      <span className="profile-name">Jonitha Cathrine</span><br />
                      <span className="profile-role">Pet Owner</span>
                  </div>
              </div>
          </div>

          <div className="action">
            <p><u>Select a Date</u></p>
          </div>

          <div className='pet-details-container'>
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
    )
};

export default Appoinments;