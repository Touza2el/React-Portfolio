import React from "react";

import "./style.scss";
import PageHeader from "./../../components/PageHeader/PageHeader";

function Blog() {
  return (
    <div className="blog-page">
      <div className="blog-page-content">
        <PageHeader title="the blog" subTitle="-- meet the latest trends --" />
      </div>
    </div>
  );
}

export default Blog;
