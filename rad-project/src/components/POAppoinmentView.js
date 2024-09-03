import React from 'react';
import profileImage from '../images/profileImg.png';
import '../styles/POAppoinmentView.css';


const Appoinments = () => {
    return (
        <div className="dashboard-container">
          
          <div className="dashboard-header">
              <h1>View Appoinments</h1>
              <div className="profile-info">
                  <img src={profileImage} alt="Profile" className="profile-img" />
                  <div className="profile-details">
                      <span className="profile-name">Jonitha Cathrine</span><br />
                      <span className="profile-role">Pet Owner</span>
                  </div>
              </div>
          </div>
          
          <div className="action">
            <h4><u>Appoinment Details</u></h4>
          </div>

          <div className="pet-details-container">
            <div className="topic"><p>Appoinment</p></div>
            <div className='App-details'>
                <table>
                    <tr>
                        <td><strong>Appoinment No:</strong></td>
                        <td>06</td>
                    </tr><br></br>
                    <tr>
                        <td><strong>Pet ID:</strong></td>
                        <td>101</td>
                    </tr><br></br>
                    <tr>
                        <td><strong>Pet's Name:</strong></td>
                        <td>Dandelion</td>
                    </tr><br></br>
                    <tr>
                        <td><strong>Pet Owner's Name:</strong></td>
                        <td>Jonitha Cathrine</td>
                    </tr><br></br>
                    <tr>
                        <td><strong>Date:</strong></td>
                        <td>09/09/2024</td>
                    </tr><br></br>
                    <tr>
                        <td><strong>Estimated time:</strong></td>
                        <td>09.15 AM</td>
                    </tr>
                </table>
            </div>

            
        
          </div>

          <div className="dashboard-footer"></div>
        </div>
          
    )
};

export default Appoinments;