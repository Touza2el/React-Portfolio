import React from "react";

import "./style.scss";
import PageHeader from "./../../components/PageHeader/PageHeader";

function About() {
  return (
    <div className="about-page">
      <div className="about-page-content">
        <PageHeader
          title="about us"
          subTitle="-- what we do &  what we are good at --"
        />
      </div>
    </div>
  );
}

export default About;
