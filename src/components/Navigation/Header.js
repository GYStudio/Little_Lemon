import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../Styling/Header.css";
import Logo from "../Images/Logo.svg";
import MenuIcon from "../Images/hamburger.svg";

const Header = () => {
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleToggleMenu = () => {
    setIsMenuOpen((prevState) => !prevState);
  };

  const handleLogoClick = () => {
    navigate("/");
  };

  const menuItems = [
    { id: 1, label: "Home", link: "/" },
    { id: 2, label: "About", link: "/about" },
    { id: 3, label: "Menu", link: "/menu" },
    { id: 4, label: "Reservations", link: "/reservations" },
    { id: 5, label: "Order Online", link: "/orders" },
    { id: 6, label: "Login", link: "/login" }
  ];

  return (
    <header className="topbar">
      <div className="logo" onClick={handleLogoClick}>
        <img src={Logo} alt="Little Lemon Logo" height={50} />
      </div>
      <nav className={`nav ${isMenuOpen ? "open" : ""}`}>
      <ul className={`menu-list ${isMenuOpen ? "open" : ""}`}>
        {menuItems.map((item) => (
          <li key={item.id}>
            <Link to={item.link} className="link">
              {item.label}
            </Link>
          </li>
        ))}
      </ul>

      </nav>
      <div className="menu-toggle" onClick={handleToggleMenu} aria-label="Toggle menu">
        <img src={MenuIcon} alt="Menu Icon" />
      </div>
    </header>
  );
};

export default Header;
