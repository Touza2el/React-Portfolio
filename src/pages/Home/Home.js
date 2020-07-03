import React from "react";
import { Link } from "react-router-dom";
import "./style.scss";

function Home() {
  return (
    <div className="home-page">
      <div className="home-page-content">
        <section className="hero-section">
          <div className="hero-section-content">
            <h5>web developer</h5>
            <h1>i build things for the web</h1>
            <p>
              Faucibus in ornare quam viverra orci. Sapien pellentesque habitant
              morbi tristique senectus et netus. Nulla aliquet enim tortor at.
              Nunc consequat interdum varius sit.
            </p>
            <Link to="/contact">
              <button>contact me</button>
            </Link>
          </div>
        </section>
        <section className="mission-section">
          <div className="container">
            <div className="mission-section-content">
              <div className="mission-section-text">
                <h2>our goal is to make your online business better</h2>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
                  elit tellus, luctus fet nec ullamcorper mattis, pulvinar
                  dapibus leo Lorem ipsum dolor sit amet, skill consectetur
                  adipiscing elit. Ut elit tellus, luctus nec ullamcorper
                  mattis, pulvinar dapibus leo
                </p>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
                  elit tellus, luctus fet nec ullamcorper mattis, pulvinar
                  dapibus leo Lorem ipsum dolor sit amet.
                </p>
                <Link to="/about">
                  <button>read more</button>
                </Link>
              </div>
              <div className="mission-section-image"></div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default Home;
