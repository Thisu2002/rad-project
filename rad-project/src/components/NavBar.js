import React from "react";
import logo from "../images/logo.png";
import user from "../images/user.png";
import "../styles/NavBar.css";
import { HashLink as Link } from "react-router-hash-link";

const NavBar = () => {
  return (
    <nav>
      <Link to="/#home">
        <img src={logo} alt="Logo" className="logo"/>
      </Link>
      <ul className="navbar-links">
        <li>
          <Link to="/#home">Home</Link>
        </li>
        <li>
          <Link to="/#about-us">About Us</Link>
        </li>
        <li>
          <Link to="/#services">Services</Link>
        </li>
        <li>
          <Link to="/#contact-us">Contact Us</Link>
        </li>
        <li>
          <Link to="/user">
            <div className="login-link">
              Login
              <img
                src={user}
                alt="user"
                className="user-icon"
              />
            </div>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;

