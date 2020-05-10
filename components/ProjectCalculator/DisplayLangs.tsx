import React from "react";
import useGitProjectCalculator from "../../container/gitprojects/gitProjectCalculator";
//
import GitLang from "./GitLang";
import { Container, Row } from "react-bootstrap";

const DisplayLangs: React.SFC = () => {
  const { gitLangFreq, isLoading } = useGitProjectCalculator();

  if (isLoading) {
    return <p>Loading</p>;
  }

  let gitLangs: Array<string> = gitLangFreq && Object.keys(gitLangFreq);

  const Printed: Array<JSX.Element> = [];
  if (gitLangs) {
    for (var i = 0; i < gitLangs.length; i++) {
      Printed.push(
        <GitLang
          key={i}
          language={gitLangs[i]}
          ammount={gitLangFreq[gitLangs[i]]}
        />
      );
    }
  }

  let langLength = gitLangs && gitLangs.length;

  return (
    gitLangs && (
      <Container fluid>
        <Row
          className={
            "metrics " +
            (langLength > 4 ? "ScrollX bigMetric" : "noScrollX smallMetric")
          }
          noGutters
        >
          {gitLangs && Printed}
        </Row>
      </Container>
    )
  );
};

export default DisplayLangs;
