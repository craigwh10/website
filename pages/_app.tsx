import "../components/ProjectCalculator/GitLang.scss";
import "animate.css/animate.css";
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
//
import "../styles/global.scss";

// import App from "next/app";
import Layout from "../components/Layout";
function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
