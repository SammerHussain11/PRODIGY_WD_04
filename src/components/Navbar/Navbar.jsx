import React, { useState } from "react";
import "./Navbar.css";
import logo from "../../assets/logo.png";

const Navbar = ({ handleScrollTo, refs }) => {
  const [menu, setMenu] = useState("home");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleMenuClick = (sectionName) => {
    setMenu(sectionName);
    handleScrollTo(refs[`${sectionName}Ref`]);
    if (isMobileMenuOpen) setIsMobileMenuOpen(false); // Close mobile menu after click
  };

  const scrollToContact = () => {
    handleScrollTo(refs.contactRef); // Scroll to Contact section
    setMenu("contact"); // Optionally set the menu state to highlight 'contact' in Navbar
    if (isMobileMenuOpen) setIsMobileMenuOpen(false); // Close mobile menu after click
  };

  return (
    <div className="navbar">
      <img
        className="web-logo"
        src={logo}
        alt="logo"
        onClick={() => handleMenuClick("home")}
      />
      <ul className={`nav-menu ${isMobileMenuOpen ? "show" : ""}`}>
        {["home", "about", "services", "myWork", "contact"].map((item) => (
          <li
            key={item}
            className={menu === item ? "active" : ""}
            onClick={() => handleMenuClick(item)}
          >
            <p>
              {item.charAt(0).toUpperCase() +
                item.slice(1).replace(/([A-Z])/g, " $1")}
            </p>
          </li>
        ))}
      </ul>
      <div className="right-section">
        <div className="nav-connect" onClick={scrollToContact}>
          Connect With Me
        </div>
        <div className="hamburger" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
