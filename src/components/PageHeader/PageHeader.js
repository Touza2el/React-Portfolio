import React from "react";

import "./style.scss";

function PageHeader(props) {
  const { title, subTitle } = props;
  return (
    <header className="page-header">
      <div className="page-header-content">
        <h2>{title}</h2>
        <p>{subTitle}</p>
      </div>
    </header>
  );
}

export default PageHeader;
