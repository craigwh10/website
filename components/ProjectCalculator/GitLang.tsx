import React from "react";
import { Col } from "react-bootstrap";
import Link from "next/link";
export interface Props {
  language: string;
  ammount: number;
}

const GitLang: React.SFC<Props> = ({ language, ammount }) => {
  return (
    <Col>
      <div className={"animated gitMetric fadeIn" + " height-" + ammount}>
        <div className="metricName">
          {language == "null" ? " Other" : language}
          {ammount > 1 ? " Projects" : " Project"}
        </div>
        <span>{ammount}</span>
      </div>
    </Col>
  );
};

export default GitLang;
