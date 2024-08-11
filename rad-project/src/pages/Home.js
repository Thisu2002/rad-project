import React from 'react';
import logo from '../images/logo.png';
import pets from '../images/pets.png';
import ellipse from '../images/ellipse.png';
import nutrition from '../images/nutrition.png';
import '../App.css';

const Home = () => {
  return (
    <div>
      <nav>
        <img src={logo} alt="Logo" style={{ height: '50px', marginRight: '20px' }} />
        <ul className='navbar-links'>
          <li><a href="#home">Home</a></li>
          <li><a href="#about-us">About Us</a></li>
          <li><a href="#services">Services</a></li>
          <li><a href="#contact-us">Contact Us</a></li>
        </ul>
      </nav>

      <section id="home" className='section'>
        <img src={pets} alt="pets" style={{width:'100%'}} />
      </section>

      <section id="about-us" className='section'>
        <div className='about1'>
          <h1>Pet Care for Every Type and Breed of Pet</h1>
          <p className='p1'>
            At Dr.Pet, we truly love and care for every type and breed of pet.
            Our pet care services are tailored to meet the individual needs of 
            each animal and are designed to ensure that they are as happy and healthy as possible. 
            We understand that it takes more than just love to provide quality pet care, so 
            we strive to provide the highest standard of care to each and every pet.
          </p>
        </div>
        <div className='about2'>
          <div className='text'>
            <h2>Why Dr.Pet?</h2>
            <p>
              We believe finding a reliable, professional pet sitter should be easy. 
              So we make sure every member of the Fetch Family is a highly-experienced 
              animal lover with a passion for petting and playing.
            </p>
          </div>
          <img src={ellipse} alt='ellipse' />
        </div>
      </section>

      <section id="services" className='section'>
        <div className='services'>
        <h2>Our Veterinary Services</h2>
        <div className='service'>
          <img src={nutrition} alt='ellipse' />
          <h3>Nutritional Counseling</h3>
          <p>
            providing tailored dietary plans and expert advice to
             ensure your pet's optimal health and well-being through
              balanced nutrition
          </p>
        </div>
        </div>
      </section>

      <section id="contact-us" className='section'>
        <h2>Contact Us</h2>
        <p>Contact details...</p>
      </section>
    </div>
  );
};

export default Home;
