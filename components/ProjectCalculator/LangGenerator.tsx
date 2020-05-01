import React from "react";
import useGitProjectCalculator from "../../container/gitprojects/gitProjectCalculator";
//
import GitLang from "./GitLang";
import { Container, Row } from "react-bootstrap";

const LangGenerator: React.SFC = () => {
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

  let primaryLanguage =
    gitLangFreq &&
    Object.keys(gitLangFreq).reduce((a, b) =>
      gitLangFreq[a] > gitLangFreq[b] ? a : b
    );

  let otherLanguages = gitLangs && gitLangs.length - 1;

  return (
    <Container>
      <h1 className="metricTitle">{`Primarily working with ${primaryLanguage}`}</h1>
      <h2 className="metricTitle">{`and ${otherLanguages} other languages`}</h2>
      <Row className={"metrics"} noGutters>
        {gitLangs && Printed}
      </Row>
    </Container>
  );
};

export default LangGenerator;
