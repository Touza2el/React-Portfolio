import React from "react";

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
              <li>| privacy policy</li>
              <li>| terms & conditions</li>
              <li>| contact us</li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
