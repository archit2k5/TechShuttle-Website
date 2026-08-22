import React from 'react'
import "./Footer.css";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="footer">

      <div className="footer-content">

        <div className="footer-brand">
          <h2>SHUTTLE</h2>
          <p>
            Connecting people, ideas and experiences.
          </p>
        </div>

        <div className="footer-links">
          <h3>Quick Links</h3>

          <Link to="/">Home</Link>
          <Link to="/team">Team</Link>
          <Link to="/about">About Us</Link>
          <Link to="/events">Events</Link>
          <Link to="/gallery">Photo Gallery</Link>
        </div>

        <div className="footer-contact">
          <h3>Contact</h3>

          <p>Email: example@email.com</p>
          <p>Phone: +91 XXXXX XXXXX</p>
        </div>

      </div>

      <div className="footer-bottom">
        <p>© 2026 Shuttle. All rights reserved.</p>
      </div>

    </footer>
  );
}

export default Footer