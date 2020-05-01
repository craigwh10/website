import React from "react";
import { NextPage } from "next";
import { Row, Col, Container } from "react-bootstrap";
//
import RecentBlogs from "../components/RecentBlogs/RecentBlogs";
import LangGenerator from "../components/ProjectCalculator/LangGenerator";
//
import PastelTextArea from "../components/TextAreas/PastelTextArea/PastelTextArea";

interface InitialProps {}

interface Props extends InitialProps {}

const IndexPage: NextPage<Props, InitialProps> = () => {
  return (
    <React.Fragment>
      <Row className={"metrics"} noGutters>
        <LangGenerator />
      </Row>
      <div className="container-holder">
        <Container>
          <Row className={"homeinfo"}>
            <PastelTextArea color="white" title="hello" secondary={false}>
              hello Everyone
            </PastelTextArea>
            <RecentBlogs stoppingPoint={2} />
          </Row>
        </Container>
      </div>
    </React.Fragment>
  );
};

export default IndexPage;
