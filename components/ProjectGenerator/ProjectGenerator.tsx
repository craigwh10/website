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
        gitRepos.data.map((item, index) => {
          return (
            <GitProject
              name={item.name}
              html_url={item.html_url}
              language={item.language}
              description={item.description}
              key={index}
              updated_at={item.updated_at}
              created_at={item.created_at}
              size={item.size}
            />
          );
        })}
    </React.Fragment>
  );
};

export default ProjectGenerator;
