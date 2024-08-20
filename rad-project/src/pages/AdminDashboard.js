import React from 'react'
import SideBar from '../components/SideBar'
import Dashboard from '../components/Dashboard'

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