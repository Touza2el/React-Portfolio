import React from "react";
import { Link } from "react-router-dom";
import "./style.scss";

function Footer() {
  return (
    <footer className="footer-component">
      <div className="container">
        <div className="footer-content">
          <div className="footer-content-left">
            <p>copyright &copy; 2020 created by touza2el.Pro</p>
          </div>
          <div className="footer-content-right">
            <ul>
              <li>
                <Link to="/">| privacy policy</Link>
              </li>
              <li>
                <Link to="/">| terms & conditions</Link>
              </li>
              <li>
                <Link to="/contact">| contact us</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
