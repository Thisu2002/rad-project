import React from 'react';
import { useLocation } from 'react-router-dom';
import '../styles/Dashboard.css';
import profileImage from '../images/profileImg.png';
import UpcomingApp from './UpcomingApp';
import VetAppointments from './VetAppointments';
import VetDash from './VetDash';


const Dashboard = () => {
  const location = useLocation();
  const getCurrentPage = () => {
    switch (true) {
      case location.pathname === '/vet-appointments':
        return ' View Appointments';
      case location.pathname === '/upcoming':
        return ' Upcoming Appointments';

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
            <span className="profile-role">Vet</span>
          </div>
        </div>
      </div>

        
        

        <div className="main-content">
            {location.pathname === '/vet' && <VetDash />}
            {location.pathname === '/vet-appointments' && <VetAppointments />}
            {location.pathname === '/upcoming' && <UpcomingApp />}
        </div>

      <div className="dashboard-footer"></div>
    </div>
  );
};

export default Dashboard;
