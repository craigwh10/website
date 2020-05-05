import React from "react";
import { NextPage } from "next";
import { Row, Container } from "react-bootstrap";
//
import RecentBlogs from "../components/RecentBlogs/RecentBlogs";
import DisplayLangs from "../components/ProjectCalculator/DisplayLangs";
import DisplayTopLangText from "../components/ProjectCalculator/DisplayTopLangText";

interface InitialProps {}

interface Props extends InitialProps {}

const IndexPage: NextPage<Props, InitialProps> = () => {
  return (
    <React.Fragment>
      <div className={"heroHeader"}>
        <Container>
          <Row>
            <DisplayTopLangText />
          </Row>
          <Row>
            <DisplayLangs />
          </Row>
        </Container>
      </div>
      <div className="container-holder">
        <Container>
          <Row className={"homeinfo"}>
            <RecentBlogs stoppingPoint={2} isTitle={true} />
          </Row>
        </Container>
      </div>
    </React.Fragment>
  );
};

export default IndexPage;
