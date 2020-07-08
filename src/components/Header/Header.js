import React, { useState } from "react";
import { Link } from "react-router-dom";
import { HeaderComponent } from "./style";

function Header(props) {
  const { onscroll } = props;
  const [open, setOpen] = useState(false);

  return (
    <HeaderComponent className={onscroll ? "fix-header" : ""}>
      <div className="container">
        <div className="header-content">
          <div className="brand-name">
            <h2>
              <Link to="/">
                Touza2el.<span>Pro</span>
              </Link>
            </h2>
          </div>
          <div className={open ? "nav-bar active" : "nav-bar"}>
            <ul>
              <li>
                <Link to="/">home</Link>
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
          <div className="mobile-menu" onClick={() => setOpen(!open)}>
            <i className="fas fa-bars"></i>
          </div>
        </div>
      </div>
    </HeaderComponent>
  );
}

export default Header;
