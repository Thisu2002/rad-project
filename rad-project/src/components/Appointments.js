import React from 'react';
import '../styles/Appointments.css';
import profileImage from '../images/profileImg.png';

const Appointments = () => {
    return (
        <div className="dashboard-contain">

        <div className="dashboard-head">
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
            <div className="main-content">
            <div className="sub-heading">
                <div className="sub">
                <h4>Today's Appointments</h4>
                <h4>Upcoming</h4>
                </div>
                <hr className="sub-heading-hr" />
            </div>
            
            <div className="appo-table">    
            <table>
                <thead>
                    <tr>
                        <th>Time</th>
                        <th>Pet ID</th>
                        <th>Pet Owner’s Name</th>
                        <th>Pet’s Name</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>
                    <tr>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>
                    
                </tbody>
            </table>
            </div>
            

            </div>

        </div>

        <div className="dashboard-footer"></div>
        </div>
    );
};

export default Appointments;