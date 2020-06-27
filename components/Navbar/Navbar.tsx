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
            <Col md={3}>
              <Link href="/">
                {props.theme ? (
                  <a className="logo">
                    Craig <span className="dark rectangle"></span> #202123;
                  </a>
                ) : (
                  <a className="logo">
                    Craig <span className="white rectangle"></span> #FFF;
                  </a>
                )}
              </Link>
            </Col>
            <Col md={{ span: 9 }}>
              <Navlinks links={links} />
              <a
                className={
                  props.theme
                    ? "lightmodelink pullright-desktop"
                    : "darkmodelink pullright-desktop"
                }
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
