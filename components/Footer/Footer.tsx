import React from "react";
import { Col, Container, Row } from "react-bootstrap";

import Navlinks from "../Navbar/Navigationlinks";
import Link from "next/link";
import { links } from "../../constants";

interface Props {
  className: string;
  darkModeToggle: () => void;
  theme: boolean;
}

const Footer: React.SFC<Props> = (props) => {
  return (
    <footer className={props.className}>
      <div className={"footer"}>
        <Container>
          <Row>
            <Col md={3}>
              <Link href="/">
                {props.theme ? (
                  <a className="logo logo-footer">
                    Craig <span className="dark rectangle"></span> #202123;
                  </a>
                ) : (
                  <a className="logo logo-footer">
                    Craig <span className="white rectangle"></span> #FFF;
                  </a>
                )}
              </Link>
            </Col>
            <Col md={{ span: 9 }}>
              <Navlinks links={links} />
              <a
                onClick={props.darkModeToggle}
                className={
                  props.theme
                    ? "lightmodelink pullright-desktop"
                    : "darkmodelink pullright-desktop"
                }
              >
                {props.theme ? "Light Mode" : "Dark Mode"}
              </a>
            </Col>
          </Row>
        </Container>
      </div>
    </footer>
  );
};

export default Footer;
