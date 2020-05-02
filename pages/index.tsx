import React from "react";
import { NextPage } from "next";
import { Row, Col, Container } from "react-bootstrap";
//
import RecentBlogs from "../components/RecentBlogs/RecentBlogs";
import DisplayLangs from "../components/ProjectCalculator/DisplayLangs";
import DisplayTopLangText from "../components/ProjectCalculator/DisplayTopLangText";
//
import PastelTextArea from "../components/TextAreas/PastelTextArea/PastelTextArea";

interface InitialProps {}

interface Props extends InitialProps {}

const IndexPage: NextPage<Props, InitialProps> = () => {
  return (
    <React.Fragment>
      <Row className={"heroHeader"}>
        <DisplayTopLangText />
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
      <Row className={"metrics"} noGutters>
        <DisplayLangs />
      </Row>
    </React.Fragment>
  );
};

export default IndexPage;
