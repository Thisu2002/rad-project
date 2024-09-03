import React from 'react';
import { useLocation } from 'react-router-dom';
import '../styles/POProfile.css';
import profileImage from '../images/profileImg.png';
import ProImage from '../images/ProImage.png';

const POProfile = () => {
  const location = useLocation();
  const getCurrentPage = () => {
    switch (true) {
      case location.pathname.startsWith('/petOwners'):
        return 'Dashboard';
      case location.pathname === '/petOwnerProfile':
        return 'View Profile';
      case location.pathname === '/appointments':
        return 'Add and View Appointments';
      case location.pathname === '/pets':
        return 'Pet Details';
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
            <span className="profile-role">Admin</span>
          </div>
        </div>
      </div>

      <div className="profile-content">
            <img src={ProImage} alt="Profile Picture" className="profile-picture"/>
            <div className="username">Jonitha Cathrine</div><br></br>
            <div className='petowner-details'>
                <table>
                    <tr>
                        <td><strong>Full Name:</strong></td>
                        <td>Jonitha Cathrine</td>
                    </tr><br></br>
                    <tr>
                        <td><strong>Gender:</strong></td>
                        <td>Female</td>
                    </tr><br></br>
                    <tr>
                        <td><strong>Address:</strong></td>
                        <td>Colombo</td>
                    </tr><br></br>
                    <tr>
                        <td><strong>Contact No:</strong></td>
                        <td>859353</td>
                    </tr><br></br>
                    <tr>
                        <td><strong>Email:</strong></td>
                        <td>jonitha@gmail.com</td>
                    </tr>
                    
                </table>
                
            </div>
            <button className='edit'>Edit</button>
            
      </div>


          <div className="dashboard-footer"></div>
      </div>

  );
};

export default POProfile;