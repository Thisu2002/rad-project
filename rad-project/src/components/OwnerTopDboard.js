import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import '../styles/Dashboard.css';
import profileImage from '../images/profileImg.png';
import OwnerViewProfile from './OwnerViewProfile';
import OwnerViewAppointments from './OwnerViewAppointments';
import OwnerViewPets from './OwnerViewPets';
import AddPet from './AddPet';
import ViewPet from './ViewPet';

const Dashboard = () => {
  const location = useLocation();

  const [ownerName, setOwnerName] = useState('');
  const [ownerID, setOwnerID] = useState('');

  useEffect(() => {
    const ownerDetails = JSON.parse(localStorage.getItem('userDetails'));
    if (ownerDetails) {
      setOwnerName(ownerDetails.fullName);
      setOwnerID(ownerDetails.id);
    }
  }, []);

  const getCurrentPage = () => {
    switch (location.pathname) {
      case '/ownerProfile':
        return 'View Profile';
      case '/owner-view-appointments':
        return 'View Appointments';
      default:
        return 'Pet Details';
    }
  };

  
  return (
    <div className="dashboard-container">
      <div className="dashboard-header">
        <h1>{getCurrentPage()}</h1>
        <div className="profile-info">
          <img src={profileImage} alt="Profile" className="profile-img" />
          <div className="profile-details">
            <span className="profile-name">{ownerName}</span><br />
            <span className="profile-role">Pet Owner</span>
          </div>
        </div>
      </div>

      <div className="dashboard-content">

        <div className="main-content">
          {location.pathname === '/ownerProfile' && <OwnerViewProfile />}
          {location.pathname === '/owner-view-appointments' && <OwnerViewAppointments />}
          {location.pathname === '/petOwner' && <OwnerViewPets />}
          {location.pathname === '/pets/add-pet' && <AddPet />}
          {location.pathname.startsWith('/petOwner/viewPet/')  && <ViewPet />}
          

          {/* Add other content components here based on the selected topic */}
        </div>
      </div>

      <div className="dashboard-footer"></div>
    </div>
  );
};

export default Dashboard;
