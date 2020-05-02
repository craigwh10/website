import React, { useState } from "react";
import Link from "next/link";
import { Container } from "react-bootstrap";
//Components
import Navbar from "./Navbar/Navbar";
import Footer from "./Footer/Footer";
//
import Main from "../components/Main/Main";

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
        darkModeToggle={toggleTheme}
      />
      <Main
        className={
          "theme main " + (theme.dark ? "theme--dark" : "theme--default")
        }
        content={children}
      ></Main>
      <Footer
        className={"theme " + (theme.dark ? "theme--dark" : "theme--default")}
      />
    </>
  );
};

export default Layout;
