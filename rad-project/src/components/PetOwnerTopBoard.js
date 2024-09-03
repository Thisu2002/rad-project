import React from 'react';
import { useLocation } from 'react-router-dom';
import '../styles/PetOwnerTopBoard.css';
import profileImage from '../images/profileImg.png';

const Dashboard = () => {
  const location = useLocation();
  const getCurrentPage = () => {
    switch (true) {
      case location.pathname.startsWith('/petOwners'):
        return 'Dashboard';
      case location.pathname === '/petOwnerProfile':
        return 'View Profile';
      case location.pathname === '/appointments':
        return 'Add and View Appointments';
      case location.pathname === '/pets':
        return 'Pet Details';
      default:
        return 'Dashboard';
    }
  };
  

  return (
    <div className="dashboard-container">
      <div className="dashboard-header">
        <h1>{getCurrentPage()}</h1>
        <div className="profile-info">
          <img src={profileImage} alt="Profile" className="profile-img" />
          <div className="profile-details">
            <span className="profile-name">Jonitha Cathrine</span><br />
            <span className="profile-role">Admin</span>
          </div>
        </div>
      </div>

      
        <div className="main-content">
          {location.pathname === '/petOwner' && <Dashboard />}
          {/* Add other content components here based on the selected topic */}
        </div>
      

      <div className="dashboard-footer"></div>
    </div>
  );
};

export default Dashboard;
