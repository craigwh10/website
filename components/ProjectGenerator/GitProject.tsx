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
    <Link href={url}>
      <a>
        <Col md={4}>
          <p>{name}</p>
          {language}
        </Col>
      </a>
    </Link>
  );
};

export default GitProject;
