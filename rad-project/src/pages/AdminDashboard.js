import React from 'react'
import SideBar from '../components/SideBar'
import AdminTopDboard from '../components/AdminTopDboard'

const AdminDashboard = () => {
  return (
    <div>
        <div className = "sidebar">
            <SideBar />
        </div>

        <div className = "main">
            <AdminTopDboard />
        </div>
    </div>
    
  )
}

export default AdminDashboard