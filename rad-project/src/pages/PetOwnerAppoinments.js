import React from 'react'
import POSideBar from '../components/POSidebar';
import Appoinments from '../components/POAppoinmentDates';


const POAppoinments = () => {
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

export default POAppoinments;