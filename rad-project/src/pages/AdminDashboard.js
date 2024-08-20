import React from 'react'
import SideBar from '../Components/SideBar'
import Dashboard from '../Components/Dashboard'

const AdminDashboard = () => {
  return (
    <div>
        <div className = "sidebar">
            <SideBar />
        </div>

        <div className = "main">
            <Dashboard />
        </div>
    </div>
    
  )
}

export default AdminDashboard