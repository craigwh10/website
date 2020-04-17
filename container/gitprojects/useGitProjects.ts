import { useEffect, useState } from "react";
import axios from "axios";

// type AxiosResponse = object[] | null;

// interface GitProject {
//   name: string;
// }

interface Object {
  name: string;
  html_url: string;
  language: string;
}

interface GitProjects {
  data: Object[];
}

const useGitProjects = () => {
  const [gitRepos, setGitRepos] = useState<GitProjects>(null);
  const [isLoading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    axios
      .get("https://api.github.com/users/craigwh10/repos")
      .then(function (response) {
        console.log(response);
        // I need this data here ^^
        setGitRepos(response);
        setLoading(false);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);

  return { gitRepos, isLoading };
};

export default useGitProjects;
