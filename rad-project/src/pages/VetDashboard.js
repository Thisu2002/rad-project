import React from 'react';
import VetSideBar from '../components/VetSidebar';
import VetTopboard from '../components/VetTopboard';

const Vet = () => {
  return (
    <div>
      <div className="vetsidebar">
        <VetSideBar />
      </div>

      <div className="main">
        <VetTopboard />
      </div>
    </div>
  );
};

export default Vet;
