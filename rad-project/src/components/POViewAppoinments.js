import React from 'react';
import '../styles/POViewAppoinments.css';


const Appoinments = () => {
    return (
        <div className="appView-container">
          
          <div className="action">
            <h4><u>Appoinment Details</u></h4>
          </div>

          <div className="app-view-container">
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

          
        </div>
          
    )
};

export default Appoinments;