import React, { useState } from "react";
import resume from "../assets/Resume4.pdf";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="logo">
          Varun <span>Patidar</span>
        </div>

        <div className={`nav-links ${menuOpen ? "mobile-menu-open" : ""}`}>
          <a href="#home" onClick={closeMenu}>
            Home
          </a>
          <a href="#about" onClick={closeMenu}>
            About
          </a>
          <a href="#skills" onClick={closeMenu}>
            Skills
          </a>
          <a href="#projects" onClick={closeMenu}>
            Projects
          </a>
          <a href="#education" onClick={closeMenu}>
            Education
          </a>
          <a href="#contact" onClick={closeMenu}>
            Contact
          </a>
        </div>

        <a
          href={resume}
          target="_blank"
          rel="noreferrer"
          className="resume-btn"
        >
          Resume
        </a>

        <button
          className="menu-btn"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle navigation menu"
        >
          ☰
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
