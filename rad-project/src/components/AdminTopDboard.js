import React from 'react';
import { useLocation } from 'react-router-dom';
import '../styles/Dashboard.css';
import SummaryCard from './SummaryCard';
import profileImage from '../images/profileImg.png';
import statAppt from '../images/statAppt.png';
import statPets from '../images/statPets.png';
import statPetOwners from '../images/statPetOwners.png';
import AppointmentList from './AppointmentList';
import Calendar from './Calendar';
import VetSignup from './VetSignup';

const Dashboard = () => {
  const location = useLocation();
  const getCurrentPage = () => {
    switch (location.pathname) {
      case '/create-user':
        return 'Create User Profile';
      case '/appointments':
        return 'Appointments';
      case '/pets':
        return 'Pets';
      case '/pet-owners':
        return 'Pet Owners';
      case '/veterinary':
        return 'Veterinary';
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
        {location.pathname === '/admin' || location.pathname === '/dashboard' ? (
          <div className="summary-cards">
            <SummaryCard count={13} label="Appointments" icon={statAppt} />
            <SummaryCard count={50} label="Pets" icon={statPets} />
            <SummaryCard count={45} label="Pet Owners" icon={statPetOwners} />
          </div>
        ) : null}

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
