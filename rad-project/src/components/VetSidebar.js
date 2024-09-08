import React from 'react';
import { NavLink } from 'react-router-dom';
import '../styles/VetSideBar.css'; // Your custom styles for the sidebar
import logo from '../images/logo.png';
import dashboardIcon from '../images/dashboardIcon.png';
import appointmentsIcon from '../images/appointmentsIcon.png';
import logoutIcon from '../images/logoutIcon.png';

const Sidebar = () => {
    return (
        <div className="sidebar">
            <NavLink to="/">
                <img src={logo} alt="PetCare Logo" className="logo" />
            </NavLink>

            <ul className="sidebar-ul">
                <li>
                    <NavLink 
                        to="/vet" 
                        className={({ isActive }) => (isActive ? 'active' : '')}
                    >
                        <img src={dashboardIcon} alt="Dashboard Icon" className="icon" />
                        Dashboard
                    </NavLink>
                </li>
                <li>
                    <NavLink 
                        to="/vet-appointments" 
                        className={({ isActive }) => (isActive ? 'active' : '')}
                    >
                        <img src={appointmentsIcon} alt="View Appointments Icon" className="icon" />
                        View Appointments
                    </NavLink>
                </li>
                <li>
                    <NavLink 
                        to="/upcoming" 
                        className={({ isActive }) => (isActive ? 'active' : '')}
                    >
                        <img src={appointmentsIcon} alt="View Appointments Icon" className="icon" />
                        Upcoming Appointments
                    </NavLink>
                </li>
            </ul>

            <div className="logout">
                <NavLink to="/login">
                    <img src={logoutIcon} alt="Logout Icon" className="icon" />
                    Logout
                </NavLink>
            </div>
        </div>
    );
};

export default Sidebar;
