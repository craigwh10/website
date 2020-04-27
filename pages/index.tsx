import React from "react";
import { NextPage } from "next";
import { Row, Container } from "react-bootstrap";
//
import ProjectGenerator from "../components/ProjectGenerator/ProjectGenerator";
import LangGenerator from "../components/ProjectCalculator/LangGenerator";
//

interface InitialProps {}

interface Props extends InitialProps {}

const IndexPage: NextPage<Props, InitialProps> = () => {
  return (
    <Row className={"metrics"}>
      <LangGenerator />
    </Row>
  );
};

export default IndexPage;
