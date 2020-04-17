import React from "react";
import useGitProjectCalculator from "../../container/gitprojects/gitProjectCalculator";
//
import GitLang from "./GitLang";

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

  return <React.Fragment>{gitLangs && Printed}</React.Fragment>;
};

export default LangGenerator;

// Just need to decypher types
