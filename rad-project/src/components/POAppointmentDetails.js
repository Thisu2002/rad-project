import React from 'react';
import '../styles/POAppointmentDetails.css';
import { Link } from 'react-router-dom';


const Appointments = () => {
    return (
        <div className="appDetails-container">
          
          <div className="action">
            <h4><u>Appoinment Details</u></h4>
          </div>

          <div className="app-details-container">
            <div className="topic"><p>Appoinment</p></div>
            <div className="App-details">
                <form>
                    <table>
                        <tr>
                            <td><label>Pet Owner's Name:</label></td>
                            <td><input type='text' name='POName' style={{ width: '500px' }}></input></td>
                        </tr><br></br>
                        <tr>
                            <td><label>Pet's Name:</label></td>
                            <td><input type='text' name='PName' style={{ width: '500px' }}></input></td>
                        </tr><br></br>
                        <tr>
                            <td><label>Pet ID:</label></td>
                            <td><input type='text' name='PID'style={{ width: '100px' }}></input></td>
                        </tr><br></br>
                        <tr>
                            <td><label>Contact No:</label></td>
                            <td><input type='tel' name='Cno'style={{ width: '250px' }} min="0" maxLength={10} pattern="[0-9]{10}" placeholder="Enter 10-digit contact number"  required></input></td>
                        </tr>
                    </table>
                </form>
            </div>
            <Link to="/appointments/Appointment-Details/ViewAppointment">
            <button className="confirm-btn">Confirm</button>
            </Link>

          </div>
          <div className="dashboard-footer"></div>
        </div>

        

    )
};

export default Appointments;