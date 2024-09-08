import React from 'react';
import { NavLink } from 'react-router-dom';
import '../styles/OwnerSideBar.css';
import logo from '../images/logo.png';
import viewProfile from '../images/viewProfile.png';
import appointmentsIcon from '../images/appointmentsIcon.png';
import petsIcon from '../images/petsIcon.png';
import logoutIcon from '../images/logoutIcon.png';

const POSideBar = () => {
    return (
        <div className="owner-sidebar">
            <NavLink to="/">
                <img src={logo} alt="Dr.Pet Logo" className='logo' />
            </NavLink>

            <ul className='owner-sidebar-ul'>
                <li>
                    <NavLink to="/petOwner" className="owner-nav-link" activeClassName="active">
                        <img src={petsIcon} alt="Pets Icon" className="icon" />
                        Pet Details
                    </NavLink>
                </li>

                <li>
                    <NavLink to="/pets/add-pet" className="owner-nav-link" activeClassName="active">
                        <img src={appointmentsIcon} alt="Appointments Icon" className="icon" />
                        Add Pet
                    </NavLink>
                </li>

                <li>
                    <NavLink to="/ownerProfile" className="owner-nav-link" activeClassName="active">
                        <img src={viewProfile} alt="User Icon" className="icon" />
                        View Profile
                    </NavLink>
                </li>

                <li>
                    <NavLink to="/ownerViewAppointments" className="owner-nav-link" activeClassName="active">
                        <img src={appointmentsIcon} alt="Appointments Icon" className="icon" />
                        View Appointments
                    </NavLink>
                </li>
            </ul>

            <div className="owner-logout">
                <NavLink to="/login" className="owner-nav-link" activeClassName="active">
                    <img src={logoutIcon} alt="Logout Icon" className="icon" />
                    Logout
                </NavLink>
            </div>
        </div>
    );
}

export default POSideBar;
