import React from 'react';
import { useLocation } from 'react-router-dom';
import '../styles/Dashboard.css';
import profileImage from '../images/profileImg.png';
import PODashboard from './PODashboard';
import ViewPO from './POProfile';
import POAddAppointments from './POAddAppointments';
import Appointments from './POAppointmentDetails';
import POViewAppointments from './POViewAppointment';
import Pets from './POPetView';
import AddPets from './POAddPet';
import PetHealth from './POPetHealth';

const Dashboard = () => {
  const location = useLocation();
  const getCurrentPage = () => {
    switch (true) {
      case location.pathname.startsWith('/pet-owners'):
        return 'Pet Owners';
      case location.pathname.startsWith('/petOwnerProfile/view'):
        return 'Pet Owner Profile'; 
      case location.pathname === '/appointments':
        return ' Add Appointments';
      case location.pathname === '/appointments/Appointment-Details':
        return ' Add Appointments'; 
      case location.pathname === '/appointments/Appointment-Details/ViewAppointment':
          return ' View Appointments';
      case location.pathname === '/petView':
        return 'Pet Details';
      case location.pathname === '/petView/addPet':
        return 'Add Pet Details';
      case location.pathname === '/petView/PetHealthDetails':
        return 'Pet Health Information';
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
          {location.pathname.startsWith('/petOwnerProfile/view') && <ViewPO />}
          {location.pathname === '/appointments' && <POAddAppointments />}
          {location.pathname === '/appointments/Appointment-Details' && <Appointments />}
          {location.pathname === '/appointments/Appointment-Details/ViewAppointment' && <POViewAppointments />}
          {location.pathname === '/petView' && <Pets />}
          {location.pathname === '/petView/addPet' && <AddPets />}
          {location.pathname === '/petView/PetHealthDetails' && <PetHealth />}
          
        </div>
      

      <div className="dashboard-footer"></div>
    </div>
  );
};

export default Dashboard;
