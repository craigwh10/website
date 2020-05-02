import React from "react";
// Bootstrap
import { Row, Col, Container } from "react-bootstrap";
//
import Navlinks from "./Navigationlinks";
import { links } from "../../constants";
//
import Link from "next/link";

interface Props {
  className: string;
  darkModeToggle: () => void;
}

const Navbar: React.FC<Props> = (props) => {
  return (
    <header className={props.className}>
      <div className={"Nav"}>
        <Container fluid>
          <Row>
            <Col md={3}>
              <Link href="/">
                <a>Logo</a>
              </Link>
            </Col>
            <Col md={{ span: 2, offset: 7 }}>
              <Navlinks links={links} />
              <a onClick={props.darkModeToggle}>Darkmode</a>
            </Col>
          </Row>
        </Container>
      </div>
    </header>
  );
};

export default Navbar;
