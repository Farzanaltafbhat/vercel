// Footer.js
import React from 'react';
import './Footer.css'; // Include your CSS file
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faTwitter, faTelegram } from '@fortawesome/free-brands-svg-icons';
import logofooter from '../../assets/images/logofooter.png';

const Footer = () => {
  return (
    <footer className="footer-container">
      <div className="logo-container">
        {/* Replace the path with your logo image */}
        <img src={logofooter} alt="Logo" className="logo" />
      </div>
      <div className="footer-content">
        <div className="column">
          <h4 className="column-heading">Get Doctor</h4>
          <a href="#" ><p className="column-text"> About</p></a>
          <a href="#" ><p className="column-text"> Contact Us</p></a>
          <a href="#" ><p className="column-text"> Doctor's Profile</p></a>
          <a href="#" ><p className="column-text"> User Profile</p></a>
        </div>
        <div className="column">
          <h4 className="column-heading">For Patients </h4>
          <a href="/home" ><p className="column-text"> Search For Doctors</p></a>
          <a href="#" > <p className="column-text"> Search For Clinics</p></a>
          <a href="#" > <p className="column-text"> Search For Hospitals</p></a>
          <a href="#" ><p className="column-text"> Book Diagnostic Tests </p></a>
          <a href="#" > <p className="column-text"> Book Full Body Checkups</p></a>
        </div>
        <div className="column">
          <h4 className="column-heading">More</h4>
          <a href="#" > <p className="column-text">Help</p></a>
          <a href="#" > <p className="column-text">Developers</p></a>
          <a href="#" ><p className="column-text">Privacy Policy</p></a>
          <a href="#" ><p className="column-text">Terms & Conditions</p></a>
        </div>
        <div className="column">
          <h4 className="column-heading">Social</h4>
          <a href="#" >
            <FontAwesomeIcon icon={faFacebook} className="social-icon"  />
            <p className="column-text">Facebook</p>
          </a>
          <a href="#" >
            <FontAwesomeIcon icon={faInstagram} className="social-icon" />
            <p className="column-text">Instagram</p>
          </a>
          <a href="#" >
            <FontAwesomeIcon icon={faTwitter} className="social-icon" />
            <p className="column-text">Twitter</p>
          </a>
          <a href="#" >
            <FontAwesomeIcon icon={faTelegram} className="social-icon" />
            <p className="column-text">Telegram</p>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
