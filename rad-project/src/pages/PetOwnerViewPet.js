import React from 'react'
import POSideBar from '../components/POSidebar';
import Pets from '../components/POPetView';

const PetView = () => {
    return (
        <div>
        <div>
            <POSideBar/>
        </div>
        
        <div>
            <Pets/>
        </div>
        </div>

    )
}

export default PetView;