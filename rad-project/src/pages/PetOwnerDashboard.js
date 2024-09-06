import React from 'react';
import OwnerSideBar from '../components/OwnerSideBar';
import OwnerTopDboard from '../components/OwnerTopDboard';


const PetOwnerDashboard = () => {
  return (
    <div>
        <div className = "pet-owner-sidebar">
            <OwnerSideBar />
        </div>

        <div className = "pet-owner-main">
            <OwnerTopDboard />
        </div>
    </div>
    
  )
}

export default PetOwnerDashboard;