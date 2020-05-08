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
  theme: boolean;
}

const Navbar: React.FC<Props> = (props) => {
  return (
    <header className={props.className}>
      <div className={"Nav"}>
        <Container>
          <Row>
            <Col md={2}>
              <Link href="/">
                <a>Logo</a>
              </Link>
            </Col>
            <Col md={{ span: 10, offset: 0 }}>
              <Navlinks links={links} />
              <a
                className={props.theme ? "lightmodelink" : "darkmodelink"}
                onClick={props.darkModeToggle}
              >
                {props.theme ? "Light Mode" : "Dark Mode"}
              </a>
            </Col>
          </Row>
        </Container>
      </div>
    </header>
  );
};

export default Navbar;
