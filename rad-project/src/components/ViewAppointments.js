import React from 'react';
import '../styles/ViewAppointments.css';

const ViewAppointments = () => {
    return (
        <div className="dashboard-contain">
            <div className="dashboard-content">
                <div className="main-content">
                <div className="sub-heading">
                    <div className="sub">
                    <h4>Today's Appointments</h4>
                    <h4>Upcoming</h4>
                    </div>
                    <hr className="sub-heading-hr" />
                </div>
                
                <div className="appo-table">    
                <table>
                    <thead>
                        <tr>
                            <th>Time</th>
                            <th>Pet ID</th>
                            <th>Pet Owner’s Name</th>
                            <th>Pet’s Name</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                        </tr>
                        <tr>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                        </tr>
                        
                    </tbody>
                </table>
                </div>
                

                </div>

            </div>

            <div className="dashboard-footer"></div>
        </div>
    );
};

export default ViewAppointments;