import React from "react";
// Bootstrap
import { Row, Col, Container } from "react-bootstrap";
//
import Navlinks from "./Navigationlinks";
import { links } from "../../constants";

interface Props {
  className: string;
}

const Navbar: React.FC<Props> = (props) => {
  return (
    <header className={props.className}>
      <div className={"heroHeader"}>
        <Container>
          <Row>
            <Col md={3}>Logo</Col>
            <Col md={{ span: 2, offset: 7 }}>
              <Navlinks links={links} />
            </Col>
          </Row>
        </Container>
      </div>
    </header>
  );
};

export default Navbar;
