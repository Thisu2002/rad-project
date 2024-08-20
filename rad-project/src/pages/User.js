import React from "react";
import { Link } from "react-router-dom";
import NavBar from "../components/NavBar";
import admin from "../images/admin.png";
import vet from "../images/vet.png";
import petOwner from "../images/petOwner.png";
import arrowBack from "../images/arrowBack.png";
import "../styles/User.css";

const User = () => {
  return (
    <div>
      <NavBar />
      <div className="user-page">
        <div className="heading">
          <h4>Select a User Role</h4>
          <hr className="heading-hr" />
        </div>
        <div className="content">
          <div className="row">
            <Link to="/login?hideSignUp=true">
              <img src={admin} alt="admin" className="role-image" />
            </Link>
            <Link to="/login?hideSignUp=true">
              <img src={vet} alt="vet" className="role-image" />
            </Link>
          </div>
          <Link to="/login?hideSignUp=false">
            <img src={petOwner} alt="petOwner" className="role-image" />
          </Link>
        </div>
        <Link to="/" className="user-back">
          <img src={arrowBack} alt="arrowBack" className="user-arrow" />
          <h4>Back</h4>
        </Link>
      </div>
    </div>
  );
};

export default User;
