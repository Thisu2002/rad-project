import React from 'react';
import '../styles/Dashboard.css';
import SummaryCard from './SummaryCard';
import profileImage from '../images/profileImg.png';
import statAppt from '../images/statAppt.png';
import statPets from '../images/statPets.png';
import statPetOwners from '../images/statPetOwners.png';
import AppointmentList from './AppointmentList';
import Calendar from './Calendar';


const Dashboard = () => {
  return (
    <div className="dashboard-container">

        <div className="dashboard-header">
            <h1>Dashboard</h1>
            <div className="profile-info">
                <img src={profileImage} alt="Profile" className="profile-img" />
                <div className="profile-details">
                    <span className="profile-name">Jonitha Cathrine</span><br />
                    <span className="profile-role">Admin</span>
                </div>
            </div>
        </div>

        <div className="dashboard-content">
            <div className="summary-cards">
                <SummaryCard count={13} label="Appointments" icon={statAppt}/>
                <SummaryCard count={50} label="Pets" icon={statPets} />
                <SummaryCard count={45} label="Pet Owners" icon={statPetOwners} />
            </div>

            <div className="main-content">
                <AppointmentList />
                <Calendar />
            </div>

        </div>

        <div className="dashboard-footer"></div>
    </div>
  );
};

export default Dashboard;
