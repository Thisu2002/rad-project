import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
//import '../styles/OwnerTopboard.css';
import '../styles/Dashboard.css';
import profileImage from '../images/profileImg.png';
import PODashboard from '../components/PODashboard';
// import POProfile from '../components/POProfile';
// import AddAppointments from './POAddAppoinments';

const OwnerDashboard = () => {
  const location = useLocation();
  const [ownerName, setOwnerName] = useState('');

  useEffect(() => {
    const ownerDetails = JSON.parse(localStorage.getItem('userDetails'));
    if (ownerDetails) {
      setOwnerName(ownerDetails.fullName);
    }
  }, []);

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
            <span className="profile-name">{ownerName || 'Pet Owner'}</span><br />
            <span className="profile-role">Pet Owner</span>
          </div>
        </div>
      </div>

      

        <div className="main-content">
          {location.pathname === '/petOwner' && <PODashboard />}
          {/* {location.pathname === '/petOwnerProfile' && <POProfile />}
          {location.pathname === '/appointments' && <AddAppointments />} */}
        </div>
      

      <div className="dashboard-footer"></div>
    </div>
  );
};

export default OwnerDashboard;
