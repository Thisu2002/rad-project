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
import PetOwnerProfile from "./pages/PetOwnerProfile";
import EditPetOwnerProfile from "./pages/PetOwnerEditProfile";
import PetOwnerAddAppointments from "./pages/PetOwnerAddAppointments";
import PetOwnerAppointments from "./pages/PetOwnerAppointments";
import PetOwnerViewAppointment from "./pages/PetOwnerViewAppointment";
import PetOwnerViewPet from "./pages/PetOwnerViewPet";
import PetOwnerAddPet from "./pages/PetOwnerAddPets";
import PetOwnerPetHealth from "./pages/PetOwnerPetHealth";


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
        <Route path="/petOwnerProfile/editProfile" element={<EditPetOwnerProfile/>}/>
        <Route path="/appointments" element={<PetOwnerAddAppointments/>}/>
        <Route path="/appointments/Appointment-Details" element={<PetOwnerAppointments/>}/>
        <Route path="/appointments/Appointment-Details/ViewAppointment" element={<PetOwnerViewAppointment/>}/>
        <Route path="/petView" element={<PetOwnerViewPet/>}/>
        <Route path="/petView/addPet" element={<PetOwnerAddPet/>}/>
        <Route path="/petView/PetHealthDetails" element={<PetOwnerPetHealth/>}/>
      </Routes>
    </Router> 
  );
};

export default App;