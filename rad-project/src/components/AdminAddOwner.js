import React, { useState } from "react";
import "../styles/AdminAddOwner.css";


const AdminAddOwner = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    username: "",
    password: "",
    address: "",
    contactNo: "",
    email: "",
  });


  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:5000/admin-add-owner", {
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
          fullName: "",
          username: "",
          password: "",
          address: "",
          contactNo: "",
          email: "",
        });
    
      } else {
        console.error("Error:", result.error);
        alert(result.error);
      }
    } catch (error) {
      console.error("Error:", error);
      alert("Failed to register pet owner.");
    }
  };  

  return (
    <div className="adminAddOwner-page">
      <div className="addOwner-page-container">
        <div className="addOwner-header">
          <h4>Add Pet Owner</h4>
          <hr className="addOwner-header-hr" />
        </div>
        <form className="addOwner-form" onSubmit={handleSubmit}>
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

          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default AdminAddOwner;
