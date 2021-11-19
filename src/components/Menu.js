import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import "../assets/menu.css";

function Menu() {
  const location = useLocation();
  const [menuOpen, toggleMenu] = useState(false);

  useEffect(() => toggleMenu(false), [location]);

  return (
    <>
      <div
        className={`menu-icon__container${menuOpen ? " menu-open" : ""}`}
        onClick={() => toggleMenu(!menuOpen)}>
        <div className="menu-icon">
          <div />
          <div />
          <div />
        </div>
        <span className={`menu-icon-circle${menuOpen ? "" : " menu-open"}`} />
      </div>

      <div className={`menu-list-container${menuOpen ? " menu-open" : ""}`}>
        <div className="menu-list">
          <Link to="/" className="menu-item">
            <div className="menu-item__title">Home</div>
            <div className="menu-item__background" />
            <div className="menu-item__subtitle">Start fresh</div>
          </Link>
          <Link to="/work" className="menu-item">
            <div className="menu-item__title">Connect Wallet</div>
            <div className="menu-item__background" />
            <div className="menu-item__subtitle">This feature is coming soon.</div>
          </Link>
          <Link to="/about" className="menu-item">
            <div className="menu-item__title">Projects</div>
            <div className="menu-item__background" />
            <div className="menu-item__subtitle">Our projects are on the way!</div>
          </Link>
        </div>
      </div>
    </>
  );
}

export default Menu;
