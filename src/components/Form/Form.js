import React from "react";
import "./Form.scss";

const Form = ({ user, setUser, getUserData }) => {
  const handleInput = (e) => {
    const query = e.target.value;
    setUser(query);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    getUserData();
    setUser("");
  };

  return (
    <div className="form_wrapper">
      <h1>_</h1>
      <h1>MY GITHUB RESUMÉ</h1>
      <form onSubmit={submitHandler}>
        <label htmlFor="user-name">GITHUB USERNAME</label>
        <div>
          <input
            type="text"
            name="user-name"
            placeholder="John Doe"
            value={user}
            onChange={handleInput}
            required
          ></input>
          <input type="submit" value="GENERATE"></input>
        </div>
      </form>
    </div>
  );
};

export default Form;
