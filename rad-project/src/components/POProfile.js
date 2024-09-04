import React from 'react';
import { useLocation } from 'react-router-dom';
import '../styles/POProfile.css';
import profileImage from '../images/profileImg.png';
import ProImage from '../images/ProImage.png';

const POProfile = () => {
    return (


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
            
    


          <div className="dashboard-footer"></div>
      </div>

  );
};

export default POProfile;