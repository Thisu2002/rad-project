import React, { useState, useEffect } from 'react';
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
import PetOwners from './PetOwners';
import ViewOwner from './ViewOwner';
import Vets from './Vets';
import ViewVet from './ViewVet';

const Dashboard = () => {
  const location = useLocation();
  const [adminName, setAdminName] = useState('');

  useEffect(() => {
    const adminDetails = JSON.parse(localStorage.getItem('userDetails'));
    if (adminDetails) {
      setAdminName(adminDetails.fullName);
    }
  }, []);

  const getCurrentPage = () => {
    switch (true) {
      case location.pathname.startsWith('/pet-owners'):
        return 'Pet Owners';
      case location.pathname === '/add-vet':
        return 'Add Vet';
      case location.pathname === '/appointments':
        return 'Appointments';
      case location.pathname === '/pets':
        return 'Pets';
        case location.pathname.startsWith('/vets'):
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
            <span className="profile-name">{adminName || 'Admin2'}</span><br />
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
          {location.pathname === '/add-vet' && <VetSignup />}
          {location.pathname === '/pet-owners' && <PetOwners />}
          {location.pathname.startsWith('/pet-owners/view-owner/')  && <ViewOwner />}
          {location.pathname === '/vets' && <Vets />}
          {location.pathname.startsWith('/vets/view-vet/')  && <ViewVet />}
        </div>
      </div>

      <div className="dashboard-footer"></div>
    </div>
  );
};

export default Dashboard;
