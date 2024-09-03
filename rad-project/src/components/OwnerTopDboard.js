import React from 'react';
import { useLocation } from 'react-router-dom';
import '../styles/Dashboard.css';
import profileImage from '../images/profileImg.png';
import AppointmentList from './AppointmentList';
import Calendar from './Calendar';
import VetSignup from './VetSignup';

const Dashboard = () => {
  const location = useLocation();
  const getCurrentPage = () => {
    switch (location.pathname) {
      case '/view-appointments':
        return 'View Appointments';
      case '/pet-details':
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

      <div className="dashboard-content">

        <div className="main-content">
          {location.pathname === '/admin' && <AppointmentList />}
          {location.pathname === '/admin' && <Calendar />}
          {location.pathname === '/create-user' && <VetSignup />}
          {/* Add other content components here based on the selected topic */}
        </div>
      </div>

      <div className="dashboard-footer"></div>
    </div>
  );
};

export default Dashboard;
