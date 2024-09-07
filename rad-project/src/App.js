import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import './App.css';
import Home from "./pages/Home";
import User from "./pages/User";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import AdminDashboard from './pages/AdminDashboard';
import VetDashboard from './pages/VetDashboard';
import PetOwnerDashboard from './pages/PetOwnerDashboard';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/user" element={<User />} />
        <Route path="/login" element={<Login />} />
        <Route path="signup" element={<Signup />} />
        <Route path="/admin" element={<AdminDashboard />} />
        <Route path="/vet" element={<VetDashboard />} />
        <Route path="/petOwner" element={<PetOwnerDashboard />} />
        <Route path="/ownerProfile" element={<PetOwnerDashboard />} />
        <Route path="/add-vet" element={<AdminDashboard />} />
        <Route path="/pet-owners" element={<AdminDashboard />} />
        <Route path="/pet-owners/view-owner/:id" element={<AdminDashboard />} />

        <Route path="/pets/add-pet" element={<PetOwnerDashboard />} />
        <Route path="/vets" element={<AdminDashboard />} />
        <Route path="/vets/view-vet/:id" element={<AdminDashboard />} />
        <Route path="/appointments" element={<AdminDashboard />} />
        <Route path="/petOwner/viewPet/:id" element={<PetOwnerDashboard />} />

        <Route path="/admin-pets" element={<AdminDashboard />} />
      </Routes>
    </Router> 
  );
};

export default App;