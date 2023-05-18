import useGithubFetch from "./useGithubFetch";

const GithubUser = ({ userName }) => {
  const [user, isError, isLoading] = useGithubFetch(userName);

  return (
    <div className="userDisplay">
      {isLoading && <p> The data is Loading. Please Wait!</p>}
      {isError && <p> There is an Error while fetching data. Please Check!</p>}

      {user && (
        <div>
          <h3>{user.name}</h3>
          <img src={user.avatar_url} alt={user.name}></img>
          <p>{user.bio}</p>
          <p>Public Repos: {user.public_repos}</p>
          <p>Public Gists: {user.public_gists}</p>
          <p>URL: {user.html_url}</p>
          <p>Blog: {user.blog}</p>
        </div>
      )}
    </div>
  );
};

export default GithubUser;
