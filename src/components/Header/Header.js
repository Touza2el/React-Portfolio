import React from "react";
import { Link } from "react-router-dom";
import "./style.scss";

function Header() {
  return (
    <header className="header-component">
      <div className="container">
        <div className="header-content">
          <div className="brand-name">
            <h2>Touza2el.Pro</h2>
          </div>
          <div className="nav-bar">
            <ul>
              <li>
                <Link className="active" to="/">
                  home
                </Link>
              </li>
              <li>
                <Link to="/about">about</Link>
              </li>
              <li>
                <Link to="/portfolio">portfolio</Link>
              </li>
              <li>
                <Link to="/services">services</Link>
              </li>
              <li>
                <Link to="/blog">blog</Link>
              </li>
              <li>
                <Link to="/contact">contact</Link>
              </li>
            </ul>
          </div>
          <div className="register-buttons">
            <button className="btn login-btn">login</button>
            <button className="btn sign-in-btn">sign in</button>
          </div>
          <div className="mobile-menu">
            <i className="fas fa-bars"></i>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
