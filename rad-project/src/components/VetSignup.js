import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/VetSignup.css";

const VetSignup = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    username: "",
    password: "",
    address: "",
    contactNo: "",
    email: "",
    licenseNo: "",
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:5000/vetSignup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();
      if (response.ok) {
        alert(result.message);
        navigate("/create-user");
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
    <div className="vetSignup-page">
      <div className="vet-page-container">
        <div className="vetSignup-header">
          <h4>Veterinarian Sign Up</h4>
          <hr className="vet-header-hr" />
        </div>
        <form className="vetSignup-form" onSubmit={handleSubmit}>
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

          <label>License No:</label>
          <input
            type="text"
            name="licenseNo"
            placeholder="ex:- sdj2367h"
            value={formData.licenseNo}
            onChange={handleChange}
            required
          />

          <button type="submit">vetSignup</button>
        </form>
      </div>
    </div>
  );
};

export default VetSignup;
