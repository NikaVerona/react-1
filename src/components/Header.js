import React from "react";
import Nav from "./Nav";

function Header() {
  return (
    <header className="header">
      <div className="header-content container">
        <div className="branding">
          <img className="logo" src="https://picsum.photos/200" alt="logo" />
          <h1>OUR COMPANY</h1>
        </div>
        <Nav />
      </div>
    </header>
  );
}

export default Header;
