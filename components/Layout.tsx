import React from "react";
import Link from "next/link";
import { Container } from "react-bootstrap";
//Components
import Navbar from "./Navbar/Navbar";

const Layout: React.FC = ({ children }) => {
  return (
    <>
      <Navbar />
      <Container fluid>{children}</Container>
    </>
  );
};

export default Layout;
