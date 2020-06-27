import { Container, Row } from "react-bootstrap";
import Head from "next/head";
//
import { useState } from "react";
import ProjectGenerator from "../components/ProjectGenerator/ProjectGenerator";

function BlogPage() {
  const [filterChoice, setFilterChoice] = useState("");

  return (
    <>
      <Head>
        <title>Projects - Craigwh.it</title>
        <meta name="author" content="Craig White" />
        <meta
          name="keywords"
          content="Blogs,Web Development,Product,Analysis,Development"
        />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link rel="shortcut icon" href="./favicon.png" />
      </Head>
      <Container>
        <Row className="GitProjects">
          <ProjectGenerator />
        </Row>
      </Container>
    </>
  );
}

export default BlogPage;
