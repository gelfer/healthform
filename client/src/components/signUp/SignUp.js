import React, { Fragment, useState } from "react";
import { Link } from "react-router-dom";
import "../signIn/signIn.styles.css";

const SignUp = props => {
  // useState is equivalent to
  //   state = {
  //       formData: { } }
  // and this.state = ... for setFormData

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    password2: ""
  });

  const { name, email, password, password2 } = formData;

  const onChange = e =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = e => {
    e.preventDefault();
    if (password !== password2) {
      console.log("Passwords don't match.");
    } else {
      console.log(formData);
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
            placeholder="Name"
            name="name"
            value={name}
            onChange={e => onChange(e)}
            required
          />
          <input
            type="email"
            className="my-1"
            placeholder="Email Address"
            name="email"
            value={email}
            onChange={e => onChange(e)}
            required
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

export default SignUp;
