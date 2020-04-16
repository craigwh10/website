import React from "react";
import { NextPage } from "next";
import { Row } from "react-bootstrap";

interface InitialProps {}

interface Props extends InitialProps {}

const IndexPage: NextPage<Props, InitialProps> = () => {
  return (
    <Row>
      <p>Hi</p>
    </Row>
  );
};

export default IndexPage;
