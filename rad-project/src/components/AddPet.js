import React, { useState } from 'react';
import '../styles/AddPet.css';

const AddPet = () => {
  
  const ownerDetails = JSON.parse(localStorage.getItem('userDetails'));

  const [formData, setFormData] = useState({
    name: "",
    species: "",
    breed: "",
    dob: "",
    age: "",
    gender: "",
    weight: "",
    ownerID: ownerDetails.id
}, {
  });


  

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:5000/add-pet", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();
      if (response.ok) {
        alert(result.message);
        setFormData({
          name: "",
          species: "",
          breed: "",
          dob: "",
          age: "",
          gender: "",
          weight: "",
        });
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
    <div className='add-pet-page'>
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
                      value={formData.dob}
                    onChange={handleChange}
                    required
                    />
                    <label for="age" class="age-label">Age:</label>
                    <input 
                      type="text" 
                      id="age" 
                      name="age" 
                      value={formData.age}
                    onChange={handleChange}
                    required
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
                      value="Male"
                checked={formData.gender === "Male"}
                onChange={handleChange}
                    required
                    />
                    M
                    </label>
                    <label>
                    <input 
                      type="radio" 
                      id="female" 
                      name="gender" 
                      value="Female"
                checked={formData.gender === "Female"}
                onChange={handleChange}
                required
                      />
                    F
                    </label>
                  </div>
                </div>

                <div className='form-row'>
                  <label>Weight:</label>
                  <input
                    type="text"
                    name="weight"
                    placeholder="ex:- 5"
                    value={formData.weight}
                    onChange={handleChange}
                    required
                  />
                </div>

                <button type="submit">Submit</button>
              </form>
        </div>
    </div>
    
  )
}

export default AddPet;
