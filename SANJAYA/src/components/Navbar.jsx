import React from "react";
import { Link, NavLink } from "react-router-dom";
import logo from "../assets/final-logo2.svg";

function Navbar() {
  return (
    <nav className="whole">
      <div className="logo-text">
        <img src={logo} alt="Logo" className="logo" />
      </div>
      <ul className="nav-list">
        <li>
          <NavLink
            to="/"
            activeClassName="active-link" 
            className="block py-2 pr-4 pl-3 hover:text-green-500"
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/contact"
            activeClassName="active-link" 
            className="block py-2 pr-4 pl-3 hover:text-green-500"
          >
            Contact
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/skills"
            activeClassName="active-link" 
            className="block py-2 pr-4 pl-3 hover:text-green-500"
          >
            Skills
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/projects"
            activeClassName="active-link"
            className="block py-2 pr-4 pl-3 hover:text-green-500"
          >
            Projects
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
