import React from "react";
import useGitProjectCalculator from "../../container/gitprojects/gitProjectCalculator";
//
import { Container, Row } from "react-bootstrap";

const DisplayTopLangText: React.SFC = () => {
  const { gitLangFreq, isLoading } = useGitProjectCalculator();

  if (isLoading) {
    return <p>Loading</p>;
  }

  let gitLangs: Array<string> = gitLangFreq && Object.keys(gitLangFreq);

  let primaryLanguage =
    gitLangFreq &&
    Object.keys(gitLangFreq).reduce((a, b) =>
      gitLangFreq[a] > gitLangFreq[b] ? a : b
    );

  let otherLanguages = gitLangs && gitLangs.length - 1;

  return (
    <Container>
      <div className="metricTitle">
        <h1>{`Primarily working with ${primaryLanguage}`}</h1>
        <h2>{`and ${otherLanguages} other languages`}</h2>
      </div>
    </Container>
  );
};

export default DisplayTopLangText;
