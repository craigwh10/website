import React from "react";
import { NextPage } from "next";
import { Row, Container } from "react-bootstrap";
//
import ProjectGenerator from "../components/ProjectGenerator/ProjectGenerator";
import LangGenerator from "../components/ProjectCalculator/LangGenerator";
//
import PastelTextArea from "../components/PastelTextArea/PastelTextArea";

interface InitialProps {}

interface Props extends InitialProps {}

const IndexPage: NextPage<Props, InitialProps> = () => {
  return (
    <React.Fragment>
      <PastelTextArea color="blue" text="hello" />
      <Row className={"metrics"}>
        <LangGenerator />
      </Row>
    </React.Fragment>
  );
};

export default IndexPage;
