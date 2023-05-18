import { useState } from "react";
import GithubUser from "./github-user.component";
import "./styles.css";

export default function App() {
  const [userName, setUserName] = useState("");

  const handleChange = (e) => setUserName(e.target.value);

  return (
    <div className="App">
      <h1>Github User</h1>
      <div className="form">
        <input
          type="search"
          placeholder="Enter Username..."
          onChange={(e) => handleChange(e)}
        />
      </div>
      {userName ? (
        <GithubUser userName={userName} />
      ) : (
        <p className="message-info"> Enter the Github username to Search! </p>
      )}
    </div>
  );
}
