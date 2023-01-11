import React from "react";
import "./pluralsight.css";

const Pluralsight = () => {
  return (
    <div className="pluralsight">
      {/* Sidebar form */}
      <div className="pluralsight__sidebar">
        <form className="plusralsight__sidebar--form" action="/submit">
          <label htmlFor="username">Username or Email</label>
          <input type="text" />
          <label htmlFor="password">Password</label>
          <input type="text" />
          <button>Submit</button>
        </form>
        <div className="pluralsight__sidebar--text">
          <a href="/forgot">Forgot Password</a>
          <br />
          <br />
          <p>Sign in with your google account</p>
          <button>Create new account</button>
        </div>
      </div>

      {/* Heroarea begining */}
      <div className="pluralsight__heroarea">
        <h2 className="pluralsight__heroarea--text">
          Lets create the future together
        </h2>
        <button className="pluralsight__heroarea--button">
          Start free trial
        </button>
      </div>
    </div>
  );
};

export default Pluralsight;
