import React from 'react';
import POSideBar from '../components/POSidebar';
import AddAppoinments from '../components/POAddAppoinments';

const PetOwnerAddAppoinments = () => {
  return (
    <div>
        <div className="sidebar">
          <POSideBar/>
        </div>

        <div className="main">
          <AddAppoinments/>
        </div>
        
        
    </div>
   
    
  )
}

export default PetOwnerAddAppoinments;