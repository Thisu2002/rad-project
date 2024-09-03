import React from 'react';
import profileImage from '../images/profileImg.png';
import '../styles/POPetView.css';

const Pets = () => {
    return (
        <div className="dashboard-container">
          
          <div className="dashboard-header">
              <h1>Add Pet Details</h1>
              <div className="profile-info">
                  <img src={profileImage} alt="Profile" className="profile-img" />
                  <div className="profile-details">
                      <span className="profile-name">Jonitha Cathrine</span><br />
                      <span className="profile-role">Pet Owner</span>
                  </div>
              </div>
          </div>
          <div className="dashboard-footer"></div>
        </div>
    )
};

export default Pets;