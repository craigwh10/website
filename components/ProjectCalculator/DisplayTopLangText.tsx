import React from "react";
import useGitProjectCalculator from "../../container/gitprojects/gitProjectCalculator";
//
import { Col } from "react-bootstrap";

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
    gitLangFreq && (
      <Col>
        <div className="metricTitle hero animated fadeIn">
          <h1>{`I enjoy making stuff with ${primaryLanguage} & ${otherLanguages} other languages.`}</h1>
          <p>
            {`My name's `}
            <a
              href="https://www.linkedin.com/in/craig-white98/"
              target="_blank"
            >
              Craig
            </a>
            {`, and I'm an Associate at AND Digital.`}
            <br />
            {`I enjoy making products, whether it be the analysis or development of them.`}
          </p>
        </div>
      </Col>
    )
  );
};

export default DisplayTopLangText;
