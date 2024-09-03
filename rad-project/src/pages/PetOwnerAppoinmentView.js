import React from 'react'
import POSideBar from '../components/POSidebar';
import Appoinments from '../components/POAppoinmentView';

const AppoinmentView = () => {
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

export default AppoinmentView;