import React from "react";
import "./Results.scss";

const Results = ({ userData }) => {
  console.log(userData);
  return (
    <div className="results_wrapper">
      <h1>_</h1>
      <h1>{userData.login}</h1>
      <h3>{userData.bio}</h3>
    </div>
  );
};

export default Results;
