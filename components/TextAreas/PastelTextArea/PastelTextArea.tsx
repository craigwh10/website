import React from "react";
import { Row, Col, Container } from "react-bootstrap";

export interface Props {
  color?: string;
  title?: string;
  children: any;
  secondary: boolean;
}

const PastelTextArea: React.SFC<Props> = ({
  title,
  color,
  secondary,
  children,
}) => {
  return (
    <Col>
      <div
        className={secondary ? "textarea" : "textarea pastel-" + color + "box"}
      >
        <h2>{title}</h2>
        <p>{children}</p>
      </div>
    </Col>
  );
};

export default PastelTextArea;
