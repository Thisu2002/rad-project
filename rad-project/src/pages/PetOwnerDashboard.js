import React from 'react'
import Dashboard from '../components/PODashboard';
import POSideBar from '../components/POSidebar';

const PetOwnerDashboard = () => {
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

export default PetOwnerDashboard;