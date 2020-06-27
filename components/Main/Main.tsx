import React from "react";
import { Container } from "react-bootstrap";

export interface MainProps {
  className: string;
  content: any;
}

const Main: React.FC<MainProps> = (props) => {
  return (
    <main className={props.className}>
      <div className={props.className}>{props.content}</div>
    </main>
  );
};

export default Main;
