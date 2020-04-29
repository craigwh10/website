import React, { useState } from "react";
import Link from "next/link";
import { Container } from "react-bootstrap";
//Components
import Navbar from "./Navbar/Navbar";
import Footer from "./Footer/Footer";

const Layout: React.FC = ({ children }) => {
  const [theme, setTheme] = useState({
    dark: false,
  });

  const toggleTheme = () => {
    setTheme({
      dark: !theme.dark,
    });
  };

  return (
    <>
      <Navbar
        className={"theme " + (theme.dark ? "theme--dark" : "theme--default")}
      />
      <Container
        className={
          "theme main " + (theme.dark ? "theme--dark" : "theme--default")
        }
      >
        {children}
      </Container>
      <a onClick={toggleTheme}>Fuck</a>
      <Footer
        className={"theme " + (theme.dark ? "theme--dark" : "theme--default")}
      />
    </>
  );
};

export default Layout;
