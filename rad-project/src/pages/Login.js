import React, { useState } from "react";
import { useLocation, Link, useNavigate } from "react-router-dom";
import axios from "axios";
import NavBar from "../components/NavBar";
import "../styles/Login.css";
import arrowBack from "../images/arrowBack.png";

const Login = () => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const hideSignUp = queryParams.get("hideSignUp") === "true";
  const navigate = useNavigate();
  
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post("/login", { username, password });
      const { token, redirect } = response.data;

      localStorage.setItem("token", token);

      navigate(redirect);
    } catch (err) {
      setError("Invalid username or password.");
    }
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
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />

          <label>Password:</label>
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <button type="submit">Login</button>
          {error && <p className="error-message">{error}</p>}
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