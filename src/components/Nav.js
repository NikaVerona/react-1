import React from "react";

function Nav() {
  return (
    <nav>
      <ul className="nav-links">
        <li className="nav-item">
          <a href="#about">About us</a>
        </li>
        <li className="nav-item">
          <a href="#offer">Offer</a>
        </li>
        <li className="nav-item disabled-nav-item">
          <span>Contact</span>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;
