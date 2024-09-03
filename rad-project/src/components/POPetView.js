import React from 'react';
import profileImage from '../images/profileImg.png';
import '../styles/POPetView.css';
import { Link } from 'react-router-dom';

const Pets = () => {
    return (
        <div className="dashboard-container">
          
          <div className="dashboard-header">
              <h1>View Pet Details</h1>
              <div className="profile-info">
                  <img src={profileImage} alt="Profile" className="profile-img" />
                  <div className="profile-details">
                      <span className="profile-name">Jonitha Cathrine</span><br />
                      <span className="profile-role">Pet Owner</span>
                  </div>
              </div>
          </div>
          
          <div className="action">
            <h4><u>Pet Details</u></h4>
          </div>

          <div className="pet-details-container">
            <div className="topic"><p>Pet Details</p></div>
            <div className='pet-details'>
                <table>
                    <tr>
                        <td><strong>Pet's Name:</strong></td>
                        <td>Dandelion</td>
                    </tr><br></br>
                    <tr>
                        <td><strong>Species:</strong></td>
                        <td>Blaaa</td>
                    </tr><br></br>
                    <tr>
                        <td><strong>Breed:</strong></td>
                        <td>Beagle</td>
                    </tr><br></br>
                    <tr>
                        <td><strong>Age:</strong></td>
                        <td>J2 years 10 months</td>
                    </tr><br></br>
                    <tr>
                        <td><strong>Date of Birth:</strong></td>
                        <td>12/10/2021</td>
                    </tr><br></br>
                    <tr>
                        <td><strong>Gender:</strong></td>
                        <td>Male</td>
                    </tr>
                </table>
            </div>
            <Link to="/addPet">
            <button className="addPet-btn">Add another pet</button>
            </Link>
            <Link to="/PetHealthDetails">
            <button className="health-btn">View health details</button>
            </Link>
          </div>

          <div className="dashboard-footer"></div>
        </div>
    )
};

export default Pets;