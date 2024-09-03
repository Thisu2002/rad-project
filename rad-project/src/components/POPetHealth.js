import React from 'react';
import '../styles/POHealth.css';


const PetHealth = () => {
    return (
        <div className="pet-health-container">

        <div className='Health-container'>
          <div className="action">
            <h4><u>Pet Health Information</u></h4>
          </div>

          <table class="pet-health-table">
          <thead>
            <tr>
                <th>Date</th>
                <th>Vaccine Type</th>
                <th>Vaccine Dose</th>
                <th>Special Remarks</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>12/01/2024</td>
                <td>LabiDabi Da</td>
                <td>10mg</td>
                <td>Next Appointment on 10.3.2024</td>
            </tr>
            <tr>
                <td>12/08/2024</td>
                <td>7:00 - 10:00</td>
                <td>10mg</td>
                <td>-</td>
            </tr>
            <tr>
                <td>12/08/2024</td>
                <td>Blaaaaaaahhhhh</td>
                <td>10mg</td>
                <td>30</td>
            </tr>
            <tr>
                <td>12/08/2024</td>
                <td>Blaaaaaaahhhhh</td>
                <td>10mg</td>
                <td>30</td>
            </tr>
            <tr>
                <td>12/08/2024</td>
                <td>7:00 - 10:00</td>
                <td>10mg</td>
                <td>30</td>
            </tr>
        </tbody>
        </table>
        </div> 
          
        </div>
    )
};

export default PetHealth;