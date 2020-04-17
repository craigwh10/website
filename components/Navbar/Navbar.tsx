import React from "react";
// Bootstrap
import { Row, Col, Container } from "react-bootstrap";
//
import Navlinks from "./Navigationlinks";
import { links } from "../../constants";
//
import styles from "./Navbar.module.scss";

const Navbar: React.FC = () => {
  return (
    <div className={styles.heroHeader}>
      <Container>
        <Row>
          <Col md={3}>Logo</Col>
          <Col md={{ span: 2, offset: 7 }}>
            <Navlinks links={links} />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Navbar;
