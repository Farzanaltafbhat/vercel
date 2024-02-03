// DownloadApp.js
import React from 'react';
import './Downloadapp.css'; // Import your CSS file
import Mobile from '../assets/images/Mobile.svg'; // Replace with your mobile app image
import playstore from '../assets/images/playstore.png';
import appstore from '../assets/images/appstore.png';

const DownloadApp = () => {
  return (
    <div className="download-app-container">
      <div className="app-image-container">
        <img src={Mobile} alt="Mobile App" className="app-image" />
      </div>
      <div className="download-info">
        <h1>Download the Get Doctor App</h1>
        <p>Access video consultation with India's top doctors  on the Get Doctor App. Connect with Doctors online, available 24/7, from the comfort of your home</p>
        <h3>Get the link to download the app</h3>
        <div className="sms-link-container">
          <input type="tel" className='input' placeholder="Enter your number with country code" />
          <button className='button'>Send SMS</button>
        </div>
        <div className="app-store-buttons">
          <a href="#" className="app-store-button">
            <img src={appstore} alt="Get it on Google Play Store" />
          </a>
          <a href="#" className="app-store-button">
            <img src={playstore} alt="Get it on App Store" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default DownloadApp;
