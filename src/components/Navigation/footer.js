import React from 'react';
import { Link } from 'react-router-dom';
import "../Styling/Footer.css";
import LLLFooter from "../Images/LLLFooter.png"


function Footer() {
  return (
    <footer className="footer">
  <div className="footer-container">
    <img className="footer-logo" src={LLLFooter} alt="Little Lemon Logo"></img>
    <nav className="footer-site-map" aria-label="Site Map">
      <h2 className="footer-title">Explore Our Site</h2>
      <ul>
        <li><Link className="footer-item" to="/">Home Sweet Home</Link></li>
        <li><Link className="footer-item" to="/about">Our Story</Link></li>
        <li><Link className="footer-item" to="/menu">Delicious Menu</Link></li>
        <li><Link className="footer-item" to="/reservations">Book a Table</Link></li>
        <li><Link className="footer-item" to="/order-online">Order Your Favorites</Link></li>
        <li><Link className="footer-item" to="/login">Member Login</Link></li>
      </ul>
    </nav>
    <address className="footer-contact">
      <h2 className="footer-title">Get in Touch</h2>
      <p className="footer-item">456 Lemon Grove</p>
      <p className="footer-item">987-654-3210</p>
      <a className="footer-item" href="mailto:contact@littlelemon.com">contact@littlelemon.com</a>
    </address>
    <section className="footer-social" aria-label="Social Media Links">
      <h2 className="footer-title">Connect with Us</h2>
      <ul>
        <li><a className="footer-item" href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">Follow us on Facebook</a></li>
        <li><a className="footer-item" href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">See our Instagram</a></li>
        <li><a className="footer-item" href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">Tweet with Us</a></li>
      </ul>
    </section>
  </div>
</footer>
);
}

export default Footer;
