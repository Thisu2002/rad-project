import React from 'react';
import { NavLink } from 'react-router-dom';
import '../styles/POSideBar.css';
import logo from '../images/logo.png';
import dashboardIcon from '../images/dashboardIcon.png';
import addIcon from '../images/addIcon.png';
import appointmentsIcon from '../images/appointmentsIcon.png';
import petsIcon from '../images/petsIcon.png';
import logoutIcon from '../images/logoutIcon.png';

const SideBar = () => {
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
                        <img src={addIcon} alt="Create User Icon" className="icon" />
                        Add Veterinarian
                    </NavLink>
                </li>

                <li>
                    <NavLink to="/appointments" className="nav-link" activeClassName="active">
                        <img src={appointmentsIcon} alt="Appointments Icon" className="icon" />
                        Appointments
                    </NavLink>
                </li>

                <li>
                    <NavLink to="/pets" className="nav-link" activeClassName="active">
                        <img src={petsIcon} alt="Pets Icon" className="icon" />
                        Pets
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

export default SideBar;
