import { useState, useEffect } from "react";
import { Link as ScrollLink } from "react-scroll";
import { Link as RouterLink, useLocation, useNavigate } from "react-router-dom";

function Navbar() {
  const [navActive, setNavActive] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const toggleNav = () => {
    setNavActive(!navActive);
  };

  const closeMenu = () => {
    setNavActive(false);
  };

  // Handle navigation for scroll links when on different pages
  const handleScrollClick = (target) => {
    closeMenu();
    if (location.pathname !== "/") {
      // If not on home page, navigate to home first, then scroll
      navigate("/");
      setTimeout(() => {
        const element = document.getElementById(target);
        if (element) {
          element.scrollIntoView({ behavior: "smooth", block: "start" });
        }
      }, 100);
    }
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 500) {
        closeMenu();
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    if (window.innerWidth <= 1200) {
      closeMenu();
    }
  }, []);

  return (
    <nav className={`navbar ${navActive ? "active" : ""}`}>
      <div className="navbar--logo">
        <RouterLink to="/" onClick={closeMenu}>
          <img src="./img/tech-logo-new.png" alt="techShuttle" height="100px" width="100px"/>
        </RouterLink>
        <RouterLink to="/" onClick={closeMenu}>
          <h1 className="navbar--logo--text">TechShuttle</h1>
        </RouterLink>
      </div>
      <button
        className={`nav__hamburger ${navActive ? "active" : ""}`}
        onClick={toggleNav}
      >
        <span className="nav__hamburger__line"></span>
        <span className="nav__hamburger__line"></span>
        <span className="nav__hamburger__line"></span>
      </button>
      <div className={`navbar--items ${navActive ? "active" : ""}`}>
        <ul>
          <li>
            {location.pathname === "/" ? (
              <ScrollLink 
                onClick={closeMenu} 
                activeClass="navbar--active-content" 
                spy={true} 
                smooth={true} 
                offset={-70} 
                duration={500} 
                to="heroSection" 
                className="navbar--content"
              >
                Home
              </ScrollLink>
            ) : (
              <button 
                onClick={() => handleScrollClick("heroSection")} 
                className="navbar--content"
              >
                Home
              </button>
            )}
          </li>
          <li>
            {location.pathname === "/" ? (
              <ScrollLink 
                onClick={closeMenu} 
                activeClass="navbar--active-content" 
                spy={true} 
                smooth={true} 
                offset={-70} 
                duration={500} 
                to="Team" 
                className="navbar--content"
              >
                Team
              </ScrollLink>
            ) : (
              <button 
                onClick={() => handleScrollClick("Team")} 
                className="navbar--content"
              >
                Team
              </button>
            )}
          </li>
          <li>
            {location.pathname === "/" ? (
              <ScrollLink 
                onClick={closeMenu} 
                activeClass="navbar--active-content" 
                spy={true} 
                smooth={true} 
                offset={-70} 
                duration={500} 
                to="AboutMe" 
                className="navbar--content"
              >
                About Us
              </ScrollLink>
            ) : (
              <button 
                onClick={() => handleScrollClick("AboutMe")} 
                className="navbar--content"
              >
                About Us
              </button>
            )}
          </li>
          <li>
            <RouterLink onClick={closeMenu} to="/events" className="navbar--content">
              Events
            </RouterLink>
          </li>
          <li>
            {location.pathname === "/" ? (
              <ScrollLink 
                onClick={closeMenu} 
                activeClass="navbar--active-content" 
                spy={true} 
                smooth={true} 
                offset={-70} 
                duration={500} 
                to="EventPics" 
                className="navbar--content"
              >
                Participants
              </ScrollLink>
            ) : (
              <button 
                onClick={() => handleScrollClick("EventPics")} 
                className="navbar--content"
              >
                Participants
              </button>
            )}
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;