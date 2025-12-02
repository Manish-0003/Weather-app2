import React from "react";
import { useState } from "react";
import { NavLink } from "react-router";
import "./Navbar.css";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  return (
    <nav className="navbar">
      <div className="navbar-logo">Sky Mate..</div>
      <div
        className={`hamburger ${open ? "open" : ""}`}
        onClick={() => setOpen(!open)}
      >
        <span></span>
        <span></span>
        <span></span>
      </div>
      <ul className={`navbar-links ${open ? "show-menu" : ""}`}>
        <li>
          <NavLink
            to="/"
            className={({ isActive }) => (isActive ? "active-link" : "")}
            onClick={() => setOpen(false)}
          >
            Home
          </NavLink>
        </li>

        <li>
          <NavLink
            to="/about"
            className={({ isActive }) => (isActive ? "active-link" : "")}
            onClick={() => setOpen(false)}
          >
            About
          </NavLink>
        </li>

        <li>
          <NavLink
            to="/forecast"
            className={({ isActive }) => (isActive ? "active-link" : "")}
            onClick={() => setOpen(false)}
          >
            Forecast
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
