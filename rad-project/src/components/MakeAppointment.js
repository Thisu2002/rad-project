// import React, {useState} from 'react';
// import {useNavigate} from 'react-router-dom';
// import '../styles/AddAppointment.css';
// import { useLocation } from 'react-router-dom';

// const MakeAppointment = () => {
//     const location = useLocation();
//     const { petId, petOwner } = location.state;  // Access passed petId and ownerId

//     const [formData, setFormData] = useState({
//         date: '',
//         time: {hours:'',minutes:''},
//         petOwner: petOwner,
//         petID: petId,
//     });

//     const navigate = useNavigate();

//     const handleChange = (e) => {
//         const { name, value } = e.target;
//         if (name === 'hours' || name === 'minutes') {
//             setFormData({ ...formData, time: { ...formData.time, [name]: value } });
//         } else {
//             setFormData({ ...formData, [name]: value });
//         }
//     };

//     const handleSubmit = async (e) => {
//         e.preventDefault();
//         try {
//             const response = await fetch('http://localhost:5000/makeAppointment', {
//                 method: 'POST',
//                 headers: {
//                     'Content-Type': 'application/json',
//                 },
//                 body: JSON.stringify(formData),
//             });
//             if (response.ok) {
//                 navigate('/petOwner/viewAppointments');
//             } else {
//                 console.error('Failed to submit appointment');
//             }
//         } catch (error) {
//             console.error('Error submitting appointment:', error);
//         }
//     };

//     return (
//         <div className="appDetails-container">
        
//         <div className="action">
//             <h4><u>Appointment Details</u></h4>
//         </div>

//         <div className="app-details-container">
//             <div className="topic"><p>Appointment</p></div>
//             <div className="App-details">
//                 <form onSubmit={handleSubmit}>
//                     <table><tbody>
//                         <tr>
//                             <td><label>Date:</label></td>
//                             <td><input type='date' name='date' value={formData.date} onChange={handleChange} style={{ width: '500px' }} required/><br /></td>
//                         </tr><br></br>
//                         <tr>
//                             <td><label>Time:</label></td>
//                             <td><select name="hours" value={formData.time.hours} onChange={handleChange} style={{ width: '500px' }} required>
//                                     <option value="">Hours</option>
//                                     {Array.from({ length: 12 }, (_, i) => {
//                                     const hour = (8 + i).toString().padStart(2, '0');
//                                     return <option key={hour} value={hour}>{hour}</option>;
//                                     })}
//                                 </select>
//                                 <span>:</span>
//                                 <select name="minutes" value={formData.time.minutes} onChange={handleChange} style={{ width: '500px' }} required>
//                                     <option value="">Minutes</option>
//                                     {['00', '15', '30', '45'].map(minute => (
//                                         <option key={minute} value={minute}>{minute}</option>
//                                     ))}
//                                 </select></td>
//                         </tr><br></br>
//                     </tbody>
//                     </table>
//                     <button type='submit' className="confirm-btn">Submit</button>
//                 </form>
//             </div>
//         </div>
//         <div className="dashboard-footer"></div>
//         </div>

        

//     )
// };

// export default MakeAppointment;


import React, {useState} from 'react';
import {useNavigate} from 'react-router-dom';
import '../styles/AddAppointment.css';
import { useLocation } from 'react-router-dom';

const MakeAppointment = () => {
    const location = useLocation();
    const { petId, petOwner } = location.state;  // Access passed petId and ownerId

    const [formData, setFormData] = useState({
        date: '',
        time: {hours: '', minutes: ''},
        petOwner: petOwner,
        petID: petId,
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

        // Construct full date with time
        const fullDateTime = new Date(formData.date);
        fullDateTime.setHours(formData.time.hours, formData.time.minutes);

        const appointmentData = {
            dateTime: fullDateTime,
            petOwner: formData.petOwner,
            petID: formData.petID
        };

        try {
            const response = await fetch('http://localhost:5000/makeAppointment', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(appointmentData),
            });
            if (response.ok) {
                alert("Appointment submitted successfully!");
                navigate(`/petOwner/viewPet/${petId}`);
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
                                <td>
                                    <select name="hours" value={formData.time.hours} onChange={handleChange} style={{ width: '500px' }} required>
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
                                    </select>
                                </td>
                            </tr><br></br>
                        </tbody>
                        </table>
                        <button type='submit' className="confirm-btn">Submit</button> {/* Move submit button inside form */}
                    </form>
                </div>
            </div>
            <div className="dashboard-footer"></div>
        </div>
    );
};

export default MakeAppointment;
