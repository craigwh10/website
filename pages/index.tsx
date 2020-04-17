import React from "react";
import { NextPage } from "next";
import { Row, Container } from "react-bootstrap";
//
import ProjectGenerator from "../components/ProjectGenerator/ProjectGenerator";
//
import styles from "../styles/index.module.scss";

interface InitialProps {}

interface Props extends InitialProps {}

const IndexPage: NextPage<Props, InitialProps> = () => {
  return (
    <Container fluid>
      <Row className={"flex-row flex-nowrap " + styles.scrollable}>
        <ProjectGenerator />
      </Row>
    </Container>
  );
};

export default IndexPage;
