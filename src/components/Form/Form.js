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
      <h1 className="form_wrapper_headline">MY GITHUB RESUMÉ</h1>
      <form onSubmit={submitHandler}>
        <label htmlFor="user-name">GITHUB USERNAME</label>
        <div className="form_wrapper_input_wrapper">
          <input
            className="form_wrapper_input_wrapper_input"
            type="text"
            name="user-name"
            placeholder="John Doe"
            value={user}
            onChange={handleInput}
            required
          ></input>
          <input
            className="form_wrapper_input_wrapper_button"
            type="submit"
            value="GENERATE"
          ></input>
        </div>
      </form>
    </div>
  );
};

export default Form;
