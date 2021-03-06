import React from "react";
import { Col } from "react-bootstrap";
export interface Props {
  language: string;
  ammount: number;
}

const GitLang: React.SFC<Props> = ({ language, ammount }) => {
  return (
    <Col className="CentralGit">
      <div className={"animated gitMetric fadeIn height-" + ammount}>
        <span>{language == "null" ? " Other" : language}</span>
        <div className="metricAmmount">
          {ammount} {ammount > 1 ? " Projects" : " Project"}
        </div>
      </div>
    </Col>
  );
};

export default GitLang;
