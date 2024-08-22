// import React from "react";
// import { Link } from "react-router-dom";
// import NavBar from "../components/NavBar";
// import "../styles/Signup.css";
// import arrowBack from "../images/arrowBack.png";

// const Signup = () => {
//   return (
//     <div className="signup-page">
//       <NavBar />
//       <div className="page-container">
//         <div className="signup-header">
//           <h4>Sign Up</h4>
//           <hr className="header-hr" />
//         </div>
//         <form className="signup-form">
//           <label>Full Name:</label>
//           <input type="text" placeholder="ex:- Harry Edward Styles" />

//           <label>Username:</label>
//           <input type="text" placeholder="ex:- hedward" />

//           <label>Password:</label>
//           <input type="password" placeholder="ex:- HEStyles@123" />

//           <label>Address:</label>
//           <input type="text" placeholder="ex:- No 146, Flower Rd, Colombo." />

//           <label>Contact No:</label>
//           <input type="text" placeholder="ex:- 0711234567" />

//           <label>Email:</label>
//           <input type="email" placeholder="ex:- hstyles94@gmail.com" />

//           <button type="submit">Signup</button>
//         </form>
//       </div>
//       <Link to="/login" className="signup-back">
//         <img src={arrowBack} alt="arrowBack" className="signup-arrow" />
//         <h4 style={{ margin: "0" }}>Back</h4>
//       </Link>
//     </div>
//   );
// };

// export default Signup;


import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import NavBar from "../components/NavBar";
import "../styles/Signup.css";
import arrowBack from "../images/arrowBack.png";

const Signup = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    username: "",
    password: "",
    address: "",
    contactNo: "",
    email: "",
  });

  const navigate = useNavigate(); // Hook for navigation

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
        alert(result.message); // Notify user of successful signup
        navigate("/login"); // Redirect to login page
      } else {
        alert(result.error); // Notify user of error
      }
    } catch (error) {
      console.error("Error:", error);
      alert("Failed to register user.");
    }
  };

  return (
    <div className="signup-page">
      <NavBar />
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
      <Link to="/login" className="signup-back">
        <img src={arrowBack} alt="arrowBack" className="signup-arrow" />
        <h4 style={{ margin: "0" }}>Back</h4>
      </Link>
    </div>
  );
};

export default Signup;
