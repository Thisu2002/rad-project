import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { useNavigate, Link } from "react-router-dom";
import '../styles/AddPet.css';

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
    name: "",
    species: "",
    breed: "",
    dob: "",
    age: "",
    gender: "",
    allergies: "",
    chronicConditions: "",
}, {
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
      alert("Failed to register pet.");
    }
  };


  return (
    <div className='appointment'>
      {/* <SideBar />

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
      </div> */}

        <div className='add-pet-content'>
          <div className='add-pet-header'>
              <span className='tab'>Add Pet Details</span>
          </div>

              <form className="addPet-form" onSubmit={handleSubmit}>
                <span className='form-title'>Pet Details</span>
                <div className='form-row'>
                  <label>Pet's Name:</label>
                  <input
                    type="text"
                    name="name"
                    placeholder="ex:- Roxy"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </div>
                
                <div className='form-row'>
                  <label>Species:</label>
                  <input
                    type="text"
                    name="species"
                    placeholder="ex:- Dog"
                    value={formData.species}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className='form-row'>
                  <label>Breed:</label>
                  <input
                    type="text"
                    name="breed"
                    placeholder="ex:- Dashchund"
                    value={formData.breed}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className='form-row'>
                    <label>Date of Birth:</label>
                    <input 
                      type="date" 
                      id="dob" 
                      name="dob" 
                    />
                    <label for="age" class="age-label">Age:</label>
                    <input 
                      type="text" 
                      id="age" 
                      name="age" 
                      class="age-input" />
                </div>

                <div class="form-row">
                  <div className='gender-options'>
                    <label>Gender:</label>
                    <label>
                    <input 
                      type="radio" 
                      id="male" 
                      name="gender" 
                      value="M" 
                    />
                    M
                    </label>
                    <label>
                    <input 
                      type="radio" 
                      id="female" 
                      name="gender" 
                      value="F" 
                      />
                    F
                    </label>
                  </div>
                </div>

                <button type="submit">Submit</button>
              </form>

          

        </div>
    </div>
    
  )
}

export default AddPet;
