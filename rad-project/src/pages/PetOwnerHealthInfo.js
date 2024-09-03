import React from 'react'
import POSideBar from '../components/POSidebar';
import PetHealth from '../components/POViewHealthInfo';

const HealthInfoView = () => {
    return (
        <div>
        <div>
            <POSideBar/>
        </div>
        
        <div>
            <PetHealth/>
        </div>
        </div>

    )
}

export default HealthInfoView;