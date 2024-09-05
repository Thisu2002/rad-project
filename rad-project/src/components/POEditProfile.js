import React from 'react';
import '../styles/POProfile.css';
import ProImage from '../images/ProImage.png';
import { Link } from 'react-router-dom';

const POEditProfile = () => {
    return (


      <div className="profile-content">
            <div className="profile-header">
              <img src={ProImage} alt="Profile Picture" className="profile-picture" />
              <div className="username">Jonitha Cathrine</div>
            </div>
            <div className='petowner-details'>
            <form>
                    <table>
                        <tr>
                            <td><label>Full Name:</label></td>
                            <td><input type='text' name='POName' style={{ width: '500px' }}></input></td>
                        </tr><br></br>
                        <tr>
                            <td><label>Gender:</label></td>
                            <td><label for="male">Male</label>&nbsp;
                                <input type="radio" id="male" name="gender" value="male" required></input>&nbsp;

                                <label for="female">Female</label>&nbsp;
                                <input type="radio" id="female" name="gender" value="female" required></input></td>
                        </tr><br></br>
                        <tr>
                            <td><label>Address:</label></td>
                            <td><input type='text' name='PID'style={{ width: '100px' }}></input></td>
                        </tr><br></br>
                        <tr>
                            <td><label>Contact No:</label></td>
                            <td><input type='tel' name='Cno'style={{ width: '250px' }} min="0" maxLength={10} pattern="[0-9]{10}" placeholder="Enter 10-digit contact number"  required></input></td>
                        </tr><br></br>
                        <tr>
                            <td><label>Email:</label></td>
                            <td><input type="email" id="email" name="email" required pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"></input></td>
                        </tr>
                    </table>
                </form>
                
            </div>
            <Link to="/petOwnerProfile">
            <button className='edit'>Save</button>
            </Link>
    


          
      </div>

  );
};

export default POEditProfile;