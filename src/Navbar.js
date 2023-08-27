import React from 'react';
import './Navbar.css'; // You can create a separate CSS file for styling
import { FaFacebookF, FaLinkedinIn, FaTwitter, FaInstagram } from 'react-icons/fa';
import {PiTruck} from 'react-icons/pi';

const Navbar = () => {
  return (
    <nav className="navbar">
      <ul className="nav-list">
        <a href="#" className="truck"><PiTruck/></a>
        <li className="free-delivery nav-item">Free Delivery</li>
        <li className="line">|</li>
        <li className="return-policy nav-item">Return Policy</li>
      </ul>
      
      <div className="follow-us">
        <span className='nav-item login'>Login </span>
        <span>Follow Us </span>
        <a href="#" className="social-icon"><FaFacebookF/></a>
        <a href="#" className="social-icon"><FaLinkedinIn/></a>
        <a href="#" className="social-icon"><FaTwitter/></a>
        <a href="#" className="social-icon"><FaInstagram/></a>
      </div>
    </nav>
  );
}

export default Navbar;
