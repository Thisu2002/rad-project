import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import './App.css';
import Home from "./pages/Home";
import User from "./pages/User";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import AdminDashboard from './pages/AdminDashboard';
import VetDashboard from './pages/VetDashboard';
import ViewRecords from "./components/ViewRecords";
import UpcomingApp from "./components/UpcomingApp";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/user" element={<User />} />
        <Route path="/login" element={<Login />} />
        <Route path="signup" element={<Signup />} />
        <Route path="/admin" element={<AdminDashboard />} />
        <Route path="/vet"  element={<VetDashboard/>} />
        <Route path="/view-records/:appointmentId" element={<ViewRecords />} />
        <Route path="/vet-appointments" element={<VetDashboard />} />
        <Route path="/upcoming" element={<UpcomingApp />} />

        




      </Routes>
    </Router> 
  );
};

export default App;