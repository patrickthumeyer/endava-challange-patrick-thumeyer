import React, { useEffect, useState } from "react";
import { Line } from "rc-progress";
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

  const languages = (repos) => {
    let languagesArray = [];

    repos.map((repo) => {
      if (languagesArray.hasOwnProperty(repo.language)) {
        languagesArray[repo.language] = languagesArray[repo.language] + 1;
      } else {
        languagesArray[repo.language] = 1;
      }
    });

    const sum = Object.values(languagesArray).reduce(
      (acc, val) => acc + val,
      0
    );

    const keys = Object.keys(languagesArray).map((key) => key);
    const values = Object.values(languagesArray).map((value) => {
      return (100 * value) / sum;
    });

    return (
      <>
        {keys[0] ? (
          <div className="language_wrapper">
            <div className="language_wrapper_header">
              <p>{keys[0]}</p>
              <p>{values[0].toFixed(1)}%</p>
            </div>
            <Line percent={values[0]} strokeColor="rgb(252, 81, 81)" />
          </div>
        ) : null}
        {keys[1] ? (
          <div className="language_wrapper">
            <div className="language_wrapper_header">
              <p>{keys[1]}</p>
              <p>{values[1].toFixed(1)}%</p>
            </div>
            <Line percent={values[1]} strokeColor="rgb(252, 81, 81)" />
          </div>
        ) : null}
        {keys[2] ? (
          <div className="language_wrapper">
            <div className="language_wrapper_header">
              <p>{keys[2]}</p>
              <p>{values[2].toFixed(1)}%</p>
            </div>
            <Line percent={values[2]} strokeColor="rgb(252, 81, 81)" />
          </div>
        ) : null}
        {keys[3] ? (
          <div className="language_wrapper">
            <div className="language_wrapper_header">
              <p>{keys[3]}</p>
              <p>{values[3].toFixed(1)}%</p>
            </div>
            <Line percent={values[3]} strokeColor="rgb(252, 81, 81)" />
          </div>
        ) : null}
        {keys[4] ? (
          <div className="language_wrapper">
            <div className="language_wrapper_header">
              <p>{keys[4]}</p>
              <p>{values[4].toFixed(1)}%</p>
            </div>
            <Line percent={values[4]} strokeColor="rgb(252, 81, 81)" />
          </div>
        ) : null}
        {keys[5] ? (
          <div className="language_wrapper">
            <div className="language_wrapper_header">
              <p>{keys[5]}</p>
              <p>{values[5].toFixed(1)}%</p>
            </div>
            <Line percent={values[5]} strokeColor="rgb(252, 81, 81)" />
          </div>
        ) : null}
        {keys[6] ? (
          <div className="language_wrapper">
            <div className="language_wrapper_header">
              <p>{keys[6]}</p>
              <p>{values[6].toFixed(1)}%</p>
            </div>
            <Line percent={values[6]} strokeColor="rgb(252, 81, 81)" />
          </div>
        ) : null}
        {keys[7] ? (
          <div className="language_wrapper">
            <div className="language_wrapper_header">
              <p>{keys[7]}</p>
              <p>{values[7].toFixed(1)}%</p>
            </div>
            <Line percent={values[7]} strokeColor="rgb(252, 81, 81)" />
          </div>
        ) : null}
      </>
    );
  };

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
          } public repositories and ${userData.followers} followers.
          `}
        </p>
      </div>

      <div className="languages_wrapper">
        <h1>__</h1>
        <h2 className="languages_wrapper_name">Languages</h2>
        {languages(repos)}
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
