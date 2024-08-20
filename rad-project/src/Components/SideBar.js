import React from 'react';
import '../styles/SideBar.css';
import logo from '../images/Logo.png';
import dashboardIcon from '../images/dashboardIcon.png';
import addIcon from '../images/addIcon.png';
import appointmentsIcon from '../images/appointmentsIcon.png';
import petsIcon from '../images/petsIcon.png';
import petOwnersIcon from '../images/petOwnersIcon.png';
import vetIcon from '../images/vetIcon.png';
import logoutIcon from '../images/logoutIcon.png';



const SideBar = () => {
    return (
        <div className="sidebar">

            <div className="logo">
                <img src = {logo} alt="Dr.Pet Logo"/>
            </div>

            <ul className='sidebar-ul'>
                <li className="active">
                    <img src={dashboardIcon} alt="Dashboard Icon" className="icon" />
                    Dashboard
                </li>

                <li>
                    <img src={addIcon} alt="Create User Icon" className="icon" />
                    Create User Profile
                </li>

                <li>
                    <img src={appointmentsIcon} alt="Appointments Icon" className="icon" />
                    Appointments
                </li>

                <li>
                    <img src={petsIcon} alt="Pets Icon" className="icon" />
                    Pets
                </li>

                <li>
                    <img src={petOwnersIcon} alt="Pet Owners Icon" className="icon" />
                    Pet Owners
                </li>

                <li>
                    <img src={vetIcon} alt="Veterinary Icon" className="icon" />
                    Veterinary
                </li>
            </ul>

            <div className="logout">
                <img src={logoutIcon} alt="Logout Icon" className="icon" />
                Logout
            </div>

        </div>
    );
}

export default SideBar;