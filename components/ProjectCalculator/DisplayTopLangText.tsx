import React from "react";
import useGitProjectCalculator from "../../container/gitprojects/gitProjectCalculator";
//
import { Col } from "react-bootstrap";
import { objectSum } from "../../helper/ProjectCalculator/objectSum";

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

  let totalLang = gitLangs && objectSum(gitLangFreq);

  return (
    gitLangFreq && (
      <>
        <Col lg={6} sm={12}>
          <div className="metricTitle hero animated fadeInLeft">
            <h1>{`I enjoy making stuff with ${primaryLanguage} & ${otherLanguages} other languages.`}</h1>
          </div>
        </Col>
        <Col lg={6} sm={12}>
          <div className="metricTitle hero animated fadeInRight metricTitleAccent">
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
              <br />
              {`I enjoy creating digital products, whether it be the analysis or development of them.`}
            </p>
            <p>
              {`So far I've been involved with around ${totalLang} personal projects, and 6 professional projects.`}
            </p>
          </div>
        </Col>
      </>
    )
  );
};

export default DisplayTopLangText;
