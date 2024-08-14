import React from "react";
import logo from '../images/logo.png';
import user from '../images/user.png';
import '../styles/NavBar.css';
import { HashLink as Link } from 'react-router-hash-link';

const NavBar = () => {
    return(
        <nav>
            <img src={logo} alt="Logo" style={{ height: '50px', marginRight: '20px' }} />
            <ul className='navbar-links'>
                <li><Link to="/#home">Home</Link></li>
                <li><Link to="/#about-us">About Us</Link></li>
                <li><Link to="/#services">Services</Link></li>
                <li><Link to="/#contact-us">Contact Us</Link></li>
                <li>
                    <Link to="/user">
                        <div style={{ display: 'flex', alignItems: 'center' }}>
                            Login
                            <img src={user} alt="user" style={{ height: '25px', margin: '0 20px 0 5px' }} />
                        </div>
                    </Link>
                </li>
            </ul>
        </nav>
    );
}

export default NavBar;
