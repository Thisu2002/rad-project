import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/POSideBar.css';
import logo from '../images/logo.png';
import dashboardIcon from '../images/dashboardIcon2.png';
import profileIcon from '../images/profile1.png';
import appoinmentsIcon from '../images/schedule1.png';
import petIcon from '../images/pet1.png';
import logoutIcon from '../images/logoutIcon.png';



const POSideBar = () => {
    return (
        <div className="sidebar">

            <Link to="/">
                <img src = {logo} alt="Dr.Pet Logo"/>
            </Link>

            <ul className="sidebar-ul">
                <li className="active">
                    
                    <img src={dashboardIcon} alt="Dashboard Icon" className="icon" />
                    Dashboard
                    
                </li>
                
                <li>
                    <Link to="/petOwnerProfile" target="_self">
                      <img src={profileIcon} alt="Profile Icon" className="icon" />
                      View Profile
                    </Link>
                </li>
                

                <li>
                    <Link to="/Appoinment-Date&Time" target="_self">
                    <img src={appoinmentsIcon} alt="Appoinment Icon" className="icon" />
                    Add and View Appoinmnets
                    </Link>
                </li>

                <li>
                    <Link to="/Pet-Details">
                    <img src={petIcon} alt="Pet Icon" className="icon" />
                    Pet Details
                    </Link>
                </li>
            </ul>

            <div className="logout">
            <Link to="/login">
                <img src={logoutIcon} alt="Logout Icon" className="icon" />
                Logout
            </Link>
            </div>

        </div>
    );
}

export default POSideBar;