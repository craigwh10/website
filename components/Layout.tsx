import React, { useState, useEffect } from "react";
import { initGA, logPageView } from "../utils/analytics";
//Components
import Navbar from "./Navbar/Navbar";
import Footer from "./Footer/Footer";
//
import Main from "../components/Main/Main";
//
import { useRouter } from "next/router";

declare const window: any;

const Layout: React.FC = (props) => {
  const router = useRouter();

  const [theme, setTheme] = useState({
    dark: false,
  });

  useEffect(() => {
    setTheme({ dark: localStorage.isDark });
    if (!window.GA_INITIALIZED) {
      initGA();
      window.GA_INITIALIZED = true;
    }
    logPageView();
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
          (router.pathname == "/" ? "Index" : "Main")
        }
        content={props.children}
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
