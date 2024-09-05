import React from 'react';
import '../styles/POProfile.css';
import ProImage from '../images/ProImage.png';
import { Link } from 'react-router-dom';

const POProfile = () => {
    return (


      <div className="profile-content">
            <div className="profile-header">
              <img src={ProImage} alt="Profile Picture" className="profile-picture" />
              <div className="username">Jonitha Cathrine</div>
            </div>
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
            <Link to="/petOwnerProfile/editProfile">
            <button className='edit'>Edit</button>
            </Link>
    


          
      </div>

  );
};

export default POProfile;