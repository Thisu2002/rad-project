import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { useNavigate, Link } from "react-router-dom";
import '../styles/AddPet.css';
import SideBar from './SideBar';
import profileImage from '../images/profileImg.png';
import arrowBack from "../images/arrowBack.png";


const AddPet = () => {
  const location = useLocation();
  const getCurrentPage = () => {
    switch (true) {
      case location.pathname.startsWith('/petOwners'):
        return 'Dashboard';
      case location.pathname === '/petOwnerProfile':
        return 'View Profile';
      case location.pathname === '/appointments':
        return 'Add and View Appointments';
      case location.pathname === '/pets':
        return 'Pet Details';
      default:
        return 'Dashboard';
    }
  };

  const [formData, setFormData] = useState({
    fullName: "",
    username: "",
    password: "",
    address: "",
    contactNo: "",
    email: "",
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:5000/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();
      if (response.ok) {
        alert(result.message);
        navigate("/login");
      } else {
        console.error("Error:", result.error);
        alert(result.error);
      }
    } catch (error) {
      console.error("Error:", error);
      alert("Failed to register user.");
    }
  };


  return (
    <div className='appointment'>
      <SideBar />

      <div className="dashboard-container">
        <div className="dashboard-header">
          <h1>{getCurrentPage()}</h1>
          <div className="profile-info">
            <img src={profileImage} alt="Profile" className="profile-img" />
            <div className="profile-details">
              <span className="profile-name">Jonitha Cathrine</span><br />
              <span className="profile-role">Admin</span>
            </div>
          </div>
        </div>
      </div>

        <div className='main-content'>


          <div className='header'>
            <span className='tab'>Add Pet Details</span>
          </div>

          <div className="signup-page">
            <div className="page-container">
              <div className="signup-header">
                <h4>Sign Up</h4>
                <hr className="header-hr" />
              </div>
              <form className="signup-form" onSubmit={handleSubmit}>
                <label>Full Name:</label>
                <input
                  type="text"
                  name="fullName"
                  placeholder="ex:- Harry Edward Styles"
                  value={formData.fullName}
                  onChange={handleChange}
                  required
                />

                <label>Username:</label>
                <input
                  type="text"
                  name="username"
                  placeholder="ex:- hedward"
                  value={formData.username}
                  onChange={handleChange}
                  required
                />

                <label>Password:</label>
                <input
                  type="password"
                  name="password"
                  placeholder="ex:- HEStyles@123"
                  value={formData.password}
                  onChange={handleChange}
                  required
                />

                <label>Address:</label>
                <input
                  type="text"
                  name="address"
                  placeholder="ex:- No 146, Flower Rd, Colombo."
                  value={formData.address}
                  onChange={handleChange}
                  required
                />

                <label>Contact No:</label>
                <input
                  type="text"
                  name="contactNo"
                  placeholder="ex:- 0711234567"
                  value={formData.contactNo}
                  onChange={handleChange}
                  required
                />

                <label>Email:</label>
                <input
                  type="email"
                  name="email"
                  placeholder="ex:- hstyles94@gmail.com"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />

                <button type="submit">Signup</button>
              </form>
            </div>
          </div>

          

        </div>
    </div>
    
  )
}

export default AddPet;
