import React from "react";
import { Link, link } from "react-router-dom";
import logo from "../logo.svg";

function Navbar() {
  return (
    <section className="navbar-section">
      <div className="navbar">
        <div className="navbar-left">
          <Link to="/">
            <img src={logo} className="logo"></img>
          </Link>
        </div>
        <div className="navbar-right">
          <ul>
            <Link to="/">
              <li>Home</li>
            </Link>
            <Link to="/about">
              <li>About</li>
            </Link>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default Navbar;
