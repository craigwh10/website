import { useEffect, useState } from "react";
import axios from "axios";

import * as types from "../../types";

const useGitProjects = () => {
  const [gitRepos, setGitRepos] = useState<types.GitProjects>(null);
  const [isLoading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    axios
      .get("https://api.github.com/users/craigwh10/repos")
      .then(function (response) {
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
