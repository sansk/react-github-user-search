import { useEffect, useState } from "react";

const useGithubFetch = (userName) => {
  const [user, setUser] = useState(null);
  const [isError, setIsError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const getUserGithub = async () => {
      setIsLoading(true);

      try {
        const response = await fetch(
          `https://api.github.com/users/${userName}`
        );
        const data = await response.json();

        setUser(data);
        setIsLoading(false);
      } catch (error) {
        setIsError(error);
        setIsLoading(false);
      }
    };

    getUserGithub();
  }, [userName]);

  return [user, isError, isLoading];
};

export default useGithubFetch;
