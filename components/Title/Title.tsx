import React from "react";
import { Container, Row, Col } from "react-bootstrap";

export interface TitleProps {
  title: string;
  subtitle?: string;
}

const Title: React.SFC<TitleProps> = ({ title, subtitle }) => {
  return (
    <div className={"title"}>
      <Container>
        <Row>
          <Col>{title}</Col>
        </Row>
      </Container>
    </div>
  );
};

export default Title;
