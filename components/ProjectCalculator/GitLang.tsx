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
      <div className={"animated gitMetric fadeIn height-" + ammount}>
        <span>{language == "null" ? " Other" : language}</span>
        <div>{ammount}</div>
        {ammount > 1 ? " Projects" : " Project"}
        {/* <div className={"bar height-" + ammount} /> */}
      </div>
    </Col>
  );
};

export default GitLang;
