import React from 'react';
import { NavLink } from 'react-router-dom';
import '../styles/POSideBar.css';
import logo from '../images/logo.png';
import dashboardIcon from '../images/dashboardIcon.png';
import viewProfile from '../images/profile1.png';
import appointmentsIcon from '../images/appointmentsIcon.png';
import petsIcon from '../images/petsIcon.png';
import logoutIcon from '../images/logoutIcon.png';

const POSideBar = () => {
    const ownerDetails = JSON.parse(localStorage.getItem('userDetails'));
    const profilePath = ownerDetails ? `/petOwnerProfile/view/${ownerDetails.id}` : '/';

    return (
        <div className="sidebar">
            <NavLink to="/">
                <img src={logo} alt="Dr.Pet Logo" className='logo' />
            </NavLink>

            <ul className='sidebar-ul'>
                <li>
                    <NavLink 
                        to="/petOwner"
                        className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}
                    >
                        <img src={dashboardIcon} alt="Dashboard Icon" className="icon" />
                        Dashboard
                    </NavLink>
                </li>

                <li>
                    <NavLink 
                       to={profilePath}
                       className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}
          >
                       <img src={viewProfile} alt="User Icon" className="icon" />
                       View Profile
                    </NavLink>
                </li>

                <li>
                    <NavLink 
                        to="/appointments" 
                        className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}
                    >
                        <img src={appointmentsIcon} alt="Appointments Icon" className="icon" />
                        Add and View Appointments
                    </NavLink>
                </li>

                <li>
                    <NavLink 
                        to="/petView" 
                        className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}
                    >
                        <img src={petsIcon} alt="Pets Icon" className="icon" />
                        Pet Details
                    </NavLink>
                </li>
            </ul>

            <div className="logout">
                <NavLink 
                    to="/login" 
                    className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}
                >
                    <img src={logoutIcon} alt="Logout Icon" className="icon" />
                    Logout
                </NavLink>
            </div>
        </div>
    );
}

export default POSideBar;
