import React from 'react'
import POSideBar from '../components/POSidebar';
import Appoinments from '../components/POAppoinmentDetails';

const AppoinmentsDetails = () => {
    return (
        <div>
        <div>
            <POSideBar/>
        </div>
        
        <div>
            <Appoinments/>
        </div>
        </div>

    )
}

export default AppoinmentsDetails;