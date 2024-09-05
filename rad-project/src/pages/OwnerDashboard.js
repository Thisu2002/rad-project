import React from 'react'
import POSideBar from '../components/POSideBar'
import OwnerTopDboard from '../components/OwnerTopDboard'

const OwnerDashboard = () => {
  return (
    <div>
        <div className = "sidebar">
            <POSideBar />
        </div>

        <div className = "main">
            <OwnerTopDboard />
        </div>
    </div>
    
  )
}

export default OwnerDashboard;