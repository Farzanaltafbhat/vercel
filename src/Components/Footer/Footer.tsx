// Footer.js
import './Footer.css'; // Import your CSS file
import logofooter from '../../assets/images/logofooter.png'
const Footer = () => {
  return (
    <footer className="footer">
        
        <div className="logo">
        <img src={logofooter} alt="Logo" />
      </div>
      <div className="page-links">
        <ul className='getdoctor'>
          <li><a href="/">Home</a></li>
          <li><a href="/about">About</a></li>
          <li><a href="/services">Services</a></li>
          <li><a href="/contact">Contact</a></li>
        </ul>
      </div>
    
    </footer>
  );
}

export default Footer;
