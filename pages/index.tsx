import React from "react";
import { NextPage } from "next";
import { Row } from "react-bootstrap";
//
import ProjectGenerator from "../components/ProjectGenerator/ProjectGenerator";
//
import useGitProjects from "../container/gitprojects/useGitProjects";

interface InitialProps {}

interface Props extends InitialProps {}

const IndexPage: NextPage<Props, InitialProps> = () => {
  return (
    <Row>
      <ProjectGenerator />
    </Row>
  );
};

export default IndexPage;
