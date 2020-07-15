import React from "react";
import { NextPage } from "next";
import { Row, Container } from "react-bootstrap";
//
import RecentBlogs from "../components/RecentBlogs/RecentBlogs";
import DisplayLangs from "../components/ProjectCalculator/DisplayLangs";
import DisplayTopLangText from "../components/ProjectCalculator/DisplayTopLangText";
import Head from "next/head";

interface InitialProps {}

interface Props extends InitialProps {}

const IndexPage: NextPage<Props, InitialProps> = () => {
  return (
    <>
      <Head>
        <title>Craigwh.it</title>
        <meta name="author" content="Craig White" />
        <meta
          name="description"
          content="I'm a 22 year old associate working for AND Digital who just enjoys making stuff, hopefully the content on here can help you make stuff too."
        />
        <meta
          name="keywords"
          content="Blogs,Web Development,Product,Analysis,Development"
        />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link rel="shortcut icon" href="./favicon.png" />
      </Head>
      <React.Fragment key="index">
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
    </>
  );
};

export default IndexPage;
