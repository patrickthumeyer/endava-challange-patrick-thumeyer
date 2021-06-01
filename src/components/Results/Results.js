import React, { useEffect, useState } from "react";
import "./Results.scss";

const Results = ({ userData }) => {
  const [repos, setRepos] = useState([]);

  const getRepos = () => {
    fetch(`https://api.github.com/users/${userData.login}/repos`)
      .then((response) => response.json())
      .then((data) => setRepos(data));
  };

  useEffect(() => {
    getRepos();
  }, [userData]);

  console.log("====================================");
  console.log("repos", repos);
  console.log("====================================");

  console.log("====================================");
  console.log(userData);
  console.log("====================================");

  return userData.login ? (
    <div className="wrapper">
      <div className="results_wrapper">
        <h1>__</h1>
        <h1 className="results_wrapper_name">{userData.login}</h1>
        <h2 className="results_wrapper_bio">{userData.bio}</h2>
        <a
          className="results_wrapper_website"
          href={userData.html_url}
          target="_blank"
        >
          {userData.html_url}
        </a>
        <p className="results_wrapper_description">
          {`On GitHub since ${userData.created_at.slice(0, 4)}, ${
            userData.login
          } is a developer based in ${userData.location} with ${
            userData.public_repos
          } public repositories and ${userData.followers} followers.`}
        </p>
      </div>

      <div className="languages_wrapper">
        <h1>__</h1>
        <h2 className="languages_wrapper_name">Languages</h2>
      </div>

      <div className="repos_wrapper">
        <h1 className="repos_wrapper_underline">__</h1>
        <h2 className="repos_wrapper_name">Popular Repositories</h2>
        <ul>
          {repos.map((repo) => {
            return (
              <li key={repo.name} className="repos_wrapper_repo">
                <div className="repos_wrapper_repo_header">
                  <h2 className="repos_wrapper_repo_header_name">
                    {repo.name}
                  </h2>
                  <h2 className="repos_wrapper_repo_header_date">
                    {repo.created_at.slice(0, 4)}-{repo.updated_at.slice(0, 4)}
                  </h2>
                </div>
                <p className="repos_wrapper_repo_language">{repo.language}</p>
                <p className="repos_wrapper_repo_description">
                  {repo.description}
                </p>
                <p className="repos_wrapper_repo_info">
                  This repository has {repo.stargazers_count} stars and
                  {repo.forks} forks. If you would like more information about
                  this repository and my contributed code, please visit{" "}
                  {
                    <a
                      className="repos_wrapper_repo_link"
                      href={repo.svn_url}
                      target="_blank"
                    >
                      the repo
                    </a>
                  }{" "}
                  on GitHub.
                </p>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  ) : null;
};

export default Results;
