import React from 'react'
import POSideBar from '../components/POSidebar';
import Pets from '../components/POAddPet';

const PetAdd = () => {
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

export default PetAdd;