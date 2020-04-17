import { useEffect, useState } from "react";
import axios from "axios";

// type AxiosResponse = object[] | null;

const useGitProjectCalculator = () => {
  const [gitLangFreq, setGitLangFreq] = useState<object>(null);
  const [isLoading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    axios
      .get("https://api.github.com/users/Haar/repos")
      .then(function (response) {
        setGitLangFreq(
          response.data.reduce((acc, it) => {
            acc[it.language] = acc[it.language] + 1 || 1;
            return acc;
          }, {})
        );
        setLoading(false);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);

  return { gitLangFreq, isLoading };
};

export default useGitProjectCalculator;
