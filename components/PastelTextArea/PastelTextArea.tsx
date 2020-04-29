import React from "react";
import { Row, Col } from "react-bootstrap";

export interface Props {
  color: string;
  text: string;
}

const PastelTextArea: React.SFC<Props> = ({ text, color }) => {
  return (
    <Row className={"pastel" + color}>
      <Col>
        <h1>{text}</h1>
      </Col>
      <Col>Hi</Col>
    </Row>
  );
};

export default PastelTextArea;
