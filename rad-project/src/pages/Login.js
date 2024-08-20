import React from "react";
import { useLocation, Link, useNavigate } from "react-router-dom";
import NavBar from "../components/NavBar";
import "../styles/Login.css";
import arrowBack from "../images/arrowBack.png";

const Login = () => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const hideSignUp = queryParams.get("hideSignUp") === "true";
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    navigate("/admin");
  };

  return (
    <div>
      <NavBar />
      <div className="page-container">
        <div className="login-header">
          <h4>Login</h4>
          <hr className="header-hr" />
        </div>
        <form onSubmit={handleSubmit} className="login-form">
          <label>Username:</label>
          <input type="text" placeholder="Username" />

          <label>Password:</label>
          <input type="password" placeholder="Password" />

          <button type="submit">Login</button>
          {!hideSignUp && (
            <p>
              Don't have an account?
              <Link to="/signup">Sign Up Here!</Link>
            </p>
          )}
        </form>
      </div>
      <Link to="/user" className="login-back">
        <img src={arrowBack} alt="arrowBack" className="login-arrow" />
        <h4 style={{ margin: "0" }}>Back</h4>
      </Link>
    </div>
  );
};

export default Login;
