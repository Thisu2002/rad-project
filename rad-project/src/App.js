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
import PetOwnerProfile from './pages/PetOwnerProfile';
import POAppoinments from './pages/PetOwnerAppoinments';
import AppoinmentsDetails from './pages/PetOwnerAppoinmentDetails';
import AppoinmentView from './pages/PetOwnerAppoinmentView';
import PetView from './pages/PetOwnerViewPet';
import PetAdd from './pages/PetOwnerAddPet';
import HealthInfoView from './pages/PetOwnerHealthInfo';

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
        <Route path="/petOwnerProfile" element={<PetOwnerProfile/>}/>
        <Route path="/Appoinment-Date&Time" element={<POAppoinments/>}/>
        <Route path="/Appoinment-Details" element={<AppoinmentsDetails/>}/>
        <Route path="/ViewAppoinment-Details" element={<AppoinmentView/>}/>
        <Route path="/Pet-Details" element={<PetView/>}/>
        <Route path="/addPet" element={<PetAdd/>}/>
        <Route path="/PetHealthDetails" element={<HealthInfoView/>}/>
      </Routes>
    </Router> 
  );
};

export default App;