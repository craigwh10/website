import React from "react";
import Link from "next/link";
import { Container } from "react-bootstrap";
//Components
import Navbar from "./Navbar/Navbar";
//
import styles from "../styles/themes.module.scss";

const Layout: React.FC = ({ children }) => {
  return (
    <>
      <Navbar />
      <Container fluid className={styles.theme}>
        {children}
      </Container>
    </>
  );
};

export default Layout;
