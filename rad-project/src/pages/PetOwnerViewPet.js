import React from 'react';
import POSideBar from '../components/POSidebar';
import Dashboard from '../components/OwnerTopDboard';


const PetOwnerViewPet = () => {
  return (
    <div>
        <div className="sidebar">
          <POSideBar/>
        </div>

        <div className="main">
          <Dashboard/>
        </div>
        
        
    </div>
   
    
  )
}

export default PetOwnerViewPet;