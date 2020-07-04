import React from "react";

import "./style.scss";
import PageHeader from "./../../components/PageHeader/PageHeader";

function Portfolio() {
  return (
    <div className="portfolio-page">
      <div className="portfolio-page-content">
        <PageHeader title="portfolio" subTitle="-- some of our work --" />
      </div>
    </div>
  );
}

export default Portfolio;
