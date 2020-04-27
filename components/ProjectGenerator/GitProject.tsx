import React from "react";
import { Col } from "react-bootstrap";
import Link from "next/link";

export interface Props {
  name: string;
  url: string;
  language: string;
}

const GitProject: React.SFC<Props> = ({ name, url, language }) => {
  return (
    <Col md={4} className={"GitProject"}>
      <Link href={url}>
        <a>
          <p>{name}</p>
          {language}
        </a>
      </Link>
    </Col>
  );
};

export default GitProject;
