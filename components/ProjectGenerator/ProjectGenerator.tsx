import React from "react";
import useGitProjects from "../../container/gitprojects/useGitProjects";
//
import GitProject from "./GitProject";
const ProjectGenerator: React.SFC = () => {
  const { gitRepos, isLoading } = useGitProjects();

  if (isLoading) {
    return <p>Loading</p>;
  }

  return (
    <React.Fragment>
      {gitRepos &&
        gitRepos.data.map((item) => {
          return (
            <GitProject
              name={item.name}
              url={item.html_url}
              language={item.language}
            />
          );
        })}
    </React.Fragment>
  );
};

export default ProjectGenerator;
