import React from "react";
import "./auth.styles.css";
import SignIn from "../../components/signIn/SignIn";
import SignUp from "../../components/signUp/SignUp";

const Auth = () => (
  <div className="authContainer">
    <SignIn />
    <SignUp />
  </div>
);

export default Auth;
