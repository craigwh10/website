import { Container, Row } from "react-bootstrap";

//
import { useState } from "react";
import ProjectGenerator from "../components/ProjectGenerator/ProjectGenerator";

function BlogPage() {
  const [filterChoice, setFilterChoice] = useState("");

  return (
    <Container>
      <Row className="GitProjects">
        <ProjectGenerator />
      </Row>
    </Container>
  );
}

export default BlogPage;
