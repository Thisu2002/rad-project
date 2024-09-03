import React, { useEffect } from "react";
import ellipse from "../images/ellipse.png";
import nutrition from "../images/nutrition.png";
import vaccine from "../images/vaccine.png";
import medicine from "../images/medicine.png";
import dental from "../images/dental.png";
import phone from "../images/phone.png";
import location from "../images/location.png";
import email from "../images/email.png";
import animals from "../images/animals.png";
import instagram from "../images/instagram.png";
import twitter from "../images/twitter.png";
import facebook from "../images/facebook.png";
import linkedin from "../images/linkedin.png";
import "../styles/Home.css";
import NavBar from "../components/NavBar";

const Home = () => {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add(
              entry.target.getAttribute("data-animation")
            );
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll("[data-animation]").forEach((element) => {
      observer.observe(element);
    });
  }, []);

  return (
    <div>
      <NavBar />

      <section id="home" className="section"></section>

      <section id="about-us" className="section">
        <div className="about1">
          <h1>Pet Care for Every Type and Breed of Pet</h1>
          <p className="p1">
            At Dr.Pet, we truly love and care for every type and breed of pet.
            Our pet care services are tailored to meet the individual needs of
            each animal and are designed to ensure that they are as happy and
            healthy as possible. We understand that it takes more than just love
            to provide quality pet care, so we strive to provide the highest
            standard of care to each and every pet.
          </p>
        </div>
        <div className="about2">
          <div className="text">
            <h2>Why Dr.Pet?</h2>
            <p>
              We believe finding a reliable, professional pet sitter should be
              easy. So we make sure every member of the Fetch Family is a
              highly-experienced animal lover with a passion for petting and
              playing.
            </p>
          </div>
          <img src={ellipse} alt="ellipse" className="ellipse" data-animation="fade-in" />
        </div>
      </section>

      <section id="services">
        <div className="v-row">
          <div className="v-item" data-animation="fade-in">
            <img src={nutrition} alt="image1" />
            <h3>Nutritional Counseling</h3>
            <p>
              Providing tailored dietary plans and expert advice to ensure your
              pet's optimal health and well-being through balanced nutrition
            </p>
          </div>

          <div className="v-heading" data-animation="fade-in">
            <h1>Our Veterinary</h1>
            <h1>Services</h1>
          </div>

          <div className="v-item" data-animation="fade-in">
            <img src={vaccine} alt="image2" />
            <h3>Vaccinations</h3>
            <p>
              Our team of experienced professionals can help with everything
              from pills to injections.
            </p>
          </div>
        </div>
        <div className="v-row">
          <div className="v-item" data-animation="fade-in">
            <img src={medicine} alt="image3" />
            <h3>Medical Administration</h3>
            <p>
              Our team of experienced professionals can help with everything
              from pills to injections.
            </p>
          </div>
          <div className="v-item" data-animation="fade-in">
            <img src={dental} alt="image4" />
            <h3>Dental Care</h3>
            <p>
              Our team of experienced professionals can help with everything
              from pills to injections.
            </p>
          </div>
        </div>
      </section>

      <section id="contact-us" className="section">
        <h2>Contact Us</h2>
        <div className="contact-container">
          <div className="contact">
            <img src={phone} alt="phone" />
            011-1234567
          </div>
          <div className="contact">
            <img src={email} alt="email" />
            info@drpet.com
          </div>
          <div className="contact">
            <img src={location} alt="location" />
            123 Main St, City, State, 12345
          </div>
        </div>
      </section>

      <div className="footer-img-container">
        <img
          src={animals}
          alt="animals"
          className="footer-img"
          data-animation="fade-in"
        />
      </div>

      <section id="footer" className="section">
        <div className="footer">
          <div className="social-media">
            <a href="#">
              <img src={facebook} alt="facebook" />
            </a>
            <a href="#">
              <img src={twitter} alt="twitter" />
            </a>
            <a href="#">
              <img src={instagram} alt="instagram" />
            </a>
            <a href="#">
              <img src={linkedin} alt="linkedin" />
            </a>
          </div>
          <br />
          <p>2024 Dr. Pet. All rights reserved.</p>
        </div>
      </section>
    </div>
  );
};

export default Home;
