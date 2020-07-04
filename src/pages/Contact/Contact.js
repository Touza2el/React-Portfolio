import React from "react";

import "./style.scss";
import PageHeader from "./../../components/PageHeader/PageHeader";

function Contact() {
  return (
    <div className="contact-page">
      <div className="contact-page-content">
        <PageHeader title="contact us" subTitle="-- drop us a line --" />
      </div>
    </div>
  );
}

export default Contact;
