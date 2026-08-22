import { useState } from "react";
import "./Navbar.css"
import { Link } from "react-router-dom";

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    return (
        <nav className="navbar">

            <div className="navbar-brand">

                <div className="navbar-logo-image">
                    <img src="/logo.png" alt="Shuttle logo" />
                </div>

                <Link to="/" className="navbar-logo">
                    SHUTTLE
                </Link>

            </div>

            <div className="navbar-links">
                <Link to="/">Home</Link>
                <Link to="/team">Team</Link>
                <Link to="/about">About Us</Link>
                <Link to="/events">Events</Link>
                <Link to="/gallery">Photo Gallery</Link>
            </div>

            <button
                className="navbar-menu"
                onClick={() => setMenuOpen(!menuOpen)}
                aria-label="Toggle navigation"
            >
                ☰
            </button>


            <div className={`mobile-menu ${menuOpen ? "open" : ""}`}>
                <Link to="/" onClick={() => setMenuOpen(false)}>
                    Home
                </Link>

                <Link to="/team" onClick={() => setMenuOpen(false)}>
                    Team
                </Link>

                <Link to="/about" onClick={() => setMenuOpen(false)}>
                    About Us
                </Link>

                <Link to="/events" onClick={() => setMenuOpen(false)}>
                    Events
                </Link>

                <Link to="/gallery" onClick={() => setMenuOpen(false)}>
                    Photo Gallery
                </Link>
            </div>

        </nav>
    );
}

export default Navbar