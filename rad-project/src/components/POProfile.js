import React from 'react';
import '../styles/POProfile.css';
import profileImage from '../images/profileImg.png';
import ProImage from '../images/ProImage.png';

const POProfile = () => {
    return (
      
      <div className="dashboard-container">
          
          <div className="dashboard-header">
              <h1>View Profile</h1>
              <div className="profile-info">
                  <img src={profileImage} alt="Profile" className="profile-img" />
                  <div className="profile-details">
                      <span className="profile-name">Jonitha Cathrine</span><br />
                      <span className="profile-role">Pet Owner</span>
                  </div>
              </div>
          </div>
          
          <div className="action">
            <h4><u>Pet Owner</u></h4>
          </div>
          
          <div className="pet-details-container">
            <img src={ProImage} alt="Profile Picture" className="profile-picture"/>
            <div className="username"><p>Jonitha Cathrine</p></div>
            <div className='pet-details'>
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
            <div className='edit-container'>
            <button className='edit'>Edit</button>
            </div>
            {/*<Link to="/addPet">
            <button className="addPet-btn">Add another pet</button>
            </Link>
            <Link to="/PetHealthDetails">
            <button className="health-btn">View health details</button>
            </Link>*/}
          </div>

          <div className="dashboard-footer"></div>
      </div>
   
  );
};

export default POProfile;