import React from 'react';
import { useLocation } from 'react-router-dom';
import '../styles/Dashboard.css';
import profileImage from '../images/profileImg.png';
import PODashboard from './PODashboard';
import POProfile from './POProfile';
import POAddAppointments from './POAddAppointments';

const Dashboard = () => {
  const location = useLocation();
  const getCurrentPage = () => {
    switch (true) {
      case location.pathname.startsWith('/pet-owners'):
        return 'Pet Owners';
      case location.pathname === '/petOwnerProfile':
        return 'View Profile';
      case location.pathname === '/appointments':
        return ' Add Appointments';
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
            <span className="profile-role">Pet Owner</span>
          </div>
        </div>
      </div>

      

        <div className="main-content">
          {location.pathname === '/petOwner' && <PODashboard />}
          {location.pathname === '/petOwnerProfile' && <POProfile />}
          {location.pathname === '/appointments' && <POAddAppointments />}
          
        </div>
      

      <div className="dashboard-footer"></div>
    </div>
  );
};

export default Dashboard;
