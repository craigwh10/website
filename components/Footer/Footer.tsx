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
                <a>Logo</a>
              </Link>
            </Col>
            <Col md={{ span: 3, offset: 6 }}>
              <Navlinks links={links} />
              <a
                onClick={props.darkModeToggle}
                className={props.theme ? "lightmodelink" : "darkmodelink"}
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
