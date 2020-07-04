import React, { Fragment, useState } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import "../signIn/signIn.styles.css";
import { setAlert } from "../../actions/alert";
import { signup } from "../../actions/register";
import PropTypes from "prop-types";

const SignUp = ({ setAlert, signup }) => {
  // useState is equivalent to
  //   state = {
  //       formData: { } }
  // and this.state = ... for setFormData

  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    password2: ""
  });

  const { username, email, password, password2 } = formData;

  const onChange = e =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = async e => {
    e.preventDefault();
    if (password !== password2) {
      setAlert("Passwords don't match.", "danger");
    } else {
      signup({ username, email, password });
    }
  };

  return (
    <div className="signUpContainer">
      <h1 className="large text-success">Sign Up</h1>
      <form className="form" onSubmit={e => onSubmit(e)}>
        <div className="form-group">
          <input
            type="text"
            className="my-1"
            placeholder="Username"
            name="username"
            value={username}
            onChange={e => onChange(e)}
          />
          <input
            type="email"
            className="my-1"
            placeholder="Email Address"
            name="email"
            value={email}
            onChange={e => onChange(e)}
          />
        </div>
        <div className="form-group">
          <input
            type="password"
            className="my-1"
            placeholder="Password"
            name="password"
            value={password}
            onChange={e => onChange(e)}
            minLength="6"
          />
          <input
            type="password"
            className="my-1"
            placeholder="Confirm Password"
            name="password2"
            value={password2}
            onChange={e => onChange(e)}
            minLength="6"
          />
        </div>
        <input type="submit" value="Sign up" className="btn btn-success" />
      </form>
    </div>
  );
};

SignUp.propTypes = {
  setAlert: PropTypes.func.isRequired,
  signup: PropTypes.func.isRequired
};

export default connect(null, { setAlert, signup })(SignUp);
