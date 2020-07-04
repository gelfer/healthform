import React from "react";
import { Link } from "react-router-dom";
import "./signIn.styles.css";

const SignIn = () => {
  return (
    <div className="signUpContainer mb">
      <h1 className="large text-primary">Sign In</h1>
      <form className="form">
        <div className="form-group">
          <input
            type="email"
            placeholder="Email Address"
            name="email"
            required
          />
        </div>
        <div className="form-group">
          <input
            type="password"
            placeholder="Password"
            name="password"
            minLength="6"
          />
        </div>
        <input type="submit" value="Sign in" className="btn btn-primary" />
      </form>
    </div>
  );
};

export default SignIn;
