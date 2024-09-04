import React from 'react';
import { useLocation } from 'react-router-dom';
import '../styles/PODashboard.css';
import dogImage from '../images/dog.jpg';

const Dashboard = () => {
    return(

      <div className="dashboard-content">
      <div className="pet-profile">
        <img src={dogImage} alt="Dandelion the Beagle" className="pet-image" />
        <div className="pet-details">
          <h3>Dandelion</h3>
          <p><strong>Breed:</strong> Beagle</p><br></br>
          <p><strong>Age:</strong> 2 years 10 months</p><br></br>
          <p><strong>Gender:</strong> Boy</p><br></br>
          <p><strong>Weight:</strong> 10.4kg</p><br></br>
          <p><strong>Height:</strong> 36 cm</p>
        </div>
        
      </div>
        
        
     

      

      <div className="dashboard-footer"></div>
    </div>
  );
};

export default Dashboard;