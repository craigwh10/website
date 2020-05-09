import React, { useState, useEffect } from "react";
//Components
import Navbar from "./Navbar/Navbar";
import Footer from "./Footer/Footer";
//
import Main from "../components/Main/Main";

const Layout: React.FC = ({ children }) => {
  const [theme, setTheme] = useState({
    dark: false,
  });

  useEffect(() => {
    setTheme({ dark: localStorage.isDark });
  }, []);

  const toggleTheme = () => {
    setTheme({
      ...theme,
      dark: !theme.dark,
    });
    let localTheme = !theme.dark;
    localStorage.setItem("isDark", String(localTheme));
  };

  return (
    <>
      <Navbar
        className={"theme " + (theme.dark ? "theme--dark" : "theme--default")}
        darkModeToggle={() => toggleTheme()}
        theme={theme.dark}
      />
      <Main
        className={
          "theme " +
          (theme.dark ? "theme--dark " : "theme--default ") +
          (String(Object(children).type.name) == "IndexPage" ? "Index" : "Main")
        }
        content={children}
      ></Main>
      <Footer
        className={"theme " + (theme.dark ? "theme--dark" : "theme--default")}
        darkModeToggle={() => toggleTheme()}
        theme={theme.dark}
      />
    </>
  );
};

export default Layout;
