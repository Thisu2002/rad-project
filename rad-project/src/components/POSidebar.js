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
    return (
        <div className="sidebar">
            <NavLink to="/">
                <img src={logo} alt="Dr.Pet Logo" className='logo' />
            </NavLink>

            <ul className='sidebar-ul'>
                <li>
                    <NavLink to="/petOwner" className="nav-link" activeClassName="active">
                        <img src={dashboardIcon} alt="Dashboard Icon" className="icon" />
                        Dashboard
                    </NavLink>
                </li>

                <li>
                    <NavLink to="/petOwnerProfile" className="nav-link" activeClassName="active">
                        <img src={viewProfile} alt="User Icon" className="icon" />
                        View Profile
                    </NavLink>
                </li>

                <li>
                    <NavLink to="/appointments" className="nav-link" activeClassName="active">
                        <img src={appointmentsIcon} alt="Appointments Icon" className="icon" />
                        Add and View Appointments
                    </NavLink>
                </li>

                <li>
                    <NavLink to="/petView" className="nav-link" activeClassName="active">
                        <img src={petsIcon} alt="Pets Icon" className="icon" />
                        Pet Details
                    </NavLink>
                </li>

               
            </ul>

            <div className="logout">
                <NavLink to="/login" className="nav-link" activeClassName="active">
                    <img src={logoutIcon} alt="Logout Icon" className="icon" />
                    Logout
                </NavLink>
            </div>
        </div>
    );
}

export default POSideBar;
