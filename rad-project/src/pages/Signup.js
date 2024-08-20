// import React from "react";
// import { Link } from "react-router-dom";
// import NavBar from "../components/NavBar";
// import "../styles/Login.css";
// import arrowBack from "../images/arrowBack.png";

// const Signup = () => {
//   return (
//     <div>
//       <NavBar />
//       <div className="page-container">
//         <div className="login-header">
//           <h4>Sign Up</h4>
//           <hr className="header-hr" />
//         </div>
//         <form>
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
//       <Link to="/login" className="back">
//         <img src={arrowBack} alt="arrowBack" className="arrow" />
//         <h4 style={{ margin: "0" }}>Back</h4>
//       </Link>
//     </div>
//   );
// };

// export default Signup;

import React from "react";
import { Link } from "react-router-dom";
import NavBar from "../components/NavBar";
import "../styles/Signup.css";
import arrowBack from "../images/arrowBack.png";

const Signup = () => {
  return (
    <div className="signup-page">
      <NavBar />
      <div className="page-container">
        <div className="signup-header">
          <h4>Sign Up</h4>
          <hr className="header-hr" />
        </div>
        <form className="signup-form">
          <label>Full Name:</label>
          <input type="text" placeholder="ex:- Harry Edward Styles" />

          <label>Username:</label>
          <input type="text" placeholder="ex:- hedward" />

          <label>Password:</label>
          <input type="password" placeholder="ex:- HEStyles@123" />

          <label>Address:</label>
          <input type="text" placeholder="ex:- No 146, Flower Rd, Colombo." />

          <label>Contact No:</label>
          <input type="text" placeholder="ex:- 0711234567" />

          <label>Email:</label>
          <input type="email" placeholder="ex:- hstyles94@gmail.com" />

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
