import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="whole">
      <nav>
        <div className="logo-text">
          <h2 className="font-black text-3xl logo">SANJAYA</h2>
        </div>
        <ul className="nav-list">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
          <Link to="/contact">Contact</Link>
          </li>
          <li>
          <Link to="/works">MyWorks</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Navbar;
