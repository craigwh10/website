import React from "react";
// Bootstrap
import { Row, Col, Container } from "react-bootstrap";
//
import Navlinks from "./Navlinks";

const Navbar: React.FC = () => {
  return (
    <Container fluid>
      <Row>
        <Col md={4}>p</Col>
        <Col md={{ span: 4, offset: 4 }}>
          <Navlinks />
        </Col>
      </Row>
    </Container>
  );
};

export default Navbar;
