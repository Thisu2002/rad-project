import React, {useState} from 'react';
import {useNavigate} from 'react-router-dom';
import { Link } from 'react-router-dom';
import '../styles/AddAppointment.css';

const Appointments = () => {
    const [formData, setFormData] = useState({
        date: '',
        time: {hours:'',minutes:''},
        petName: '',
        cNo: ''
    });

    const navigate = useNavigate();

    const handleChange = (e) => {
        const { name, value } = e.target;
        if (name === 'hours' || name === 'minutes') {
            setFormData({ ...formData, time: { ...formData.time, [name]: value } });
        } else {
            setFormData({ ...formData, [name]: value });
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch('http://localhost:5000/add-appointment', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });
            if (response.ok) {
                navigate('/appointments/Appointment-Details/ViewAppointment');
            } else {
                console.error('Failed to submit appointment');
            }
        } catch (error) {
            console.error('Error submitting appointment:', error);
        }
    };

    return (
        <div className="appDetails-container">
          
          <div className="action">
            <h4><u>Appointment Details</u></h4>
          </div>

          <div className="app-details-container">
            <div className="topic"><p>Appointment</p></div>
            <div className="App-details">
                <form onSubmit={handleSubmit}>
                    <table><tbody>
                        <tr>
                            <td><label>Date:</label></td>
                            <td><input type='date' name='date' value={formData.date} onChange={handleChange} style={{ width: '500px' }} required/><br /></td>
                        </tr><br></br>
                        <tr>
                            <td><label>Time:</label></td>
                            <td><select name="hours" value={formData.time.hours} onChange={handleChange} style={{ width: '500px' }} required>
                                    <option value="">Hours</option>
                                    {Array.from({ length: 12 }, (_, i) => {
                                    const hour = (8 + i).toString().padStart(2, '0');
                                    return <option key={hour} value={hour}>{hour}</option>;
                                    })}
                                </select>
                                <span>:</span>
                                <select name="minutes" value={formData.time.minutes} onChange={handleChange} style={{ width: '500px' }} required>
                                    <option value="">Minutes</option>
                                    {['00', '15', '30', '45'].map(minute => (
                                        <option key={minute} value={minute}>{minute}</option>
                                    ))}
                                </select></td>
                        </tr><br></br>
                        <tr>
                            <td><label>Pet's Name:</label></td>
                            <td><input type='text' name='petName' style={{ width: '500px' }} value={formData.petName} onChange={handleChange} required></input></td>
                        </tr><br></br>
                        <tr>
                            <td><label>Contact No:</label></td>
                            <td><input type='tel' name='cNo'style={{ width: '250px' }} min="0" maxLength={10} pattern="[0-9]{10}" placeholder="Enter 10-digit contact number" value={formData.cNo} onChange={handleChange}  required></input></td>
                        </tr>
                    </tbody>
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