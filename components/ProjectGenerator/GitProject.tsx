import React from "react";
import { Col } from "react-bootstrap";
import Link from "next/link";
import * as types from "../../types";
import { epochToGmt } from "../../helper/ProjectGenerator/epochtogmt";

const GitProject: React.SFC<types.Project> = ({
  name,
  html_url,
  language,
  description,
  size,
  created_at,
  updated_at,
}) => {
  return (
    <Col md={12} xs={12} className={"GitProject animated fadeInUp"}>
      <a className="GitProject" href={html_url} target="_blank">
        <div className="GitProject-title">
          {name} <span className={language}>{language}</span>
        </div>
        <p className="GitProject-description">{description}</p>
        <div className="GitProject-stats">
          <div className="GitProject-size">Size: {size}</div>
          <div className="GitProject-created_at">
            Created: {epochToGmt(created_at).day}/{epochToGmt(created_at).month}
            /{epochToGmt(created_at).year}
          </div>
          <div className="GitProject-updated_at">
            Updated: {epochToGmt(updated_at).day}/{epochToGmt(updated_at).month}
            /{epochToGmt(updated_at).year}
          </div>
        </div>
      </a>
    </Col>
  );
};

export default GitProject;
