import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import '../styles/AddPet.css';
import SideBar from './SideBar';
import profileImage from '../images/profileImg.png';


const AddPet = () => {
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
    <div className='appointment'>
      <SideBar />

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
      </div>

        <div className='main-content'>


          <div className='header'>
            <span className='tab'>Add Pet Details</span>
          </div>

          

        </div>
    </div>
    
  )
}

export default AddPet;
