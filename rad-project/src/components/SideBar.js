// import React from 'react';
// import { Link } from 'react-router-dom';
// import '../styles/SideBar.css';
// import logo from '../images/logo.png';
// import dashboardIcon from '../images/dashboardIcon.png';
// import addIcon from '../images/addIcon.png';
// import appointmentsIcon from '../images/appointmentsIcon.png';
// import petsIcon from '../images/petsIcon.png';
// import petOwnersIcon from '../images/petOwnersIcon.png';
// import vetIcon from '../images/vetIcon.png';
// import logoutIcon from '../images/logoutIcon.png';



// const SideBar = () => {
//     return (
//         <div className="sidebar">

//             <Link to="/">
//                 <img src = {logo} alt="Dr.Pet Logo" className='logo'/>
//             </Link>

//             <ul className='sidebar-ul'>
//                 <li className="active">
//                     <img src={dashboardIcon} alt="Dashboard Icon" className="icon" />
//                     Dashboard
//                 </li>

//                 <li>
//                     <img src={addIcon} alt="Create User Icon" className="icon" />
//                     Create User Profile
//                 </li>

//                 <li>
//                     <img src={appointmentsIcon} alt="Appointments Icon" className="icon" />
//                     Appointments
//                 </li>

//                 <li>
//                     <img src={petsIcon} alt="Pets Icon" className="icon" />
//                     Pets
//                 </li>

//                 <li>
//                     <img src={petOwnersIcon} alt="Pet Owners Icon" className="icon" />
//                     Pet Owners
//                 </li>

//                 <li>
//                     <img src={vetIcon} alt="Veterinary Icon" className="icon" />
//                     Veterinary
//                 </li>
//             </ul>

//             <div className="logout">
//             <Link to="/login">
                
//                     <img src={logoutIcon} alt="Logout Icon" className="icon" />
//                     Logout
                
//             </Link>
//             </div>

//         </div>
//     );
// }

// export default SideBar;

import React from 'react';
import { NavLink } from 'react-router-dom';
import '../styles/SideBar.css';
import logo from '../images/logo.png';
import dashboardIcon from '../images/dashboardIcon.png';
import addIcon from '../images/addIcon.png';
import appointmentsIcon from '../images/appointmentsIcon.png';
import petsIcon from '../images/petsIcon.png';
import petOwnersIcon from '../images/petOwnersIcon.png';
import vetIcon from '../images/vetIcon.png';
import logoutIcon from '../images/logoutIcon.png';

const SideBar = () => {
    return (
        <div className="sidebar">
            <NavLink to="/">
                <img src={logo} alt="Dr.Pet Logo" className='logo' />
            </NavLink>

            <ul className='sidebar-ul'>
                <li>
                    <NavLink to="/admin" className="nav-link" activeClassName="active">
                        <img src={dashboardIcon} alt="Dashboard Icon" className="icon" />
                        Dashboard
                    </NavLink>
                </li>

                <li>
                    <NavLink to="/add-vet" className="nav-link" activeClassName="active">
                        <img src={addIcon} alt="Create User Icon" className="icon" />
                        Add Veterinarian
                    </NavLink>
                </li>

                <li>
                    <NavLink to="/appointments" className="nav-link" activeClassName="active">
                        <img src={appointmentsIcon} alt="Appointments Icon" className="icon" />
                        Appointments
                    </NavLink>
                </li>

                <li>
                    <NavLink to="/pets" className="nav-link" activeClassName="active">
                        <img src={petsIcon} alt="Pets Icon" className="icon" />
                        Pets
                    </NavLink>
                </li>

                <li>
                    <NavLink to="/pet-owners" className="nav-link" activeClassName="active">
                        <img src={petOwnersIcon} alt="Pet Owners Icon" className="icon" />
                        Pet Owners
                    </NavLink>
                </li>

                <li>
                    <NavLink to="/vets" className="nav-link" activeClassName="active">
                        <img src={vetIcon} alt="Veterinary Icon" className="icon" />
                        Veterinary
                    </NavLink>
                </li>
            </ul>

            <div className="logout">
                <NavLink to="/login" className="nav-link" activeClassName="active">
                    <img src={logoutIcon} alt="Logout Icon" className="icon" />
                    Logout
                </NavLink>
            </div>
        </div>
    );
}

export default SideBar;

