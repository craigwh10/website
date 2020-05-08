import { useEffect, useState } from "react";
import axios from "axios";

const useGitProjectCalculator = () => {
  const [gitLangFreq, setGitLangFreq] = useState<object>(null);
  const [isLoading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    axios
      .get(`https://api.github.com/users/${process.env.USER}/repos`)
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
