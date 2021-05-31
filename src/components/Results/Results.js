import React from "react";
import "./Results.scss";

const Results = ({ userData }) => {
  console.log(userData);
  return userData.login ? (
    <div className="wrapper">
      <div className="results_wrapper">
        <h1>_</h1>
        <h1 className="results_wrapper_name">{userData.login}</h1>
        <h2 className="results_wrapper_bio">{userData.bio}</h2>
        <a className="results_wrapper_website" href={userData.html_url}>
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
        <h1>_</h1>
        <h2 className="results_wrapper_name">Languages</h2>
      </div>
    </div>
  ) : null;
};

export default Results;
