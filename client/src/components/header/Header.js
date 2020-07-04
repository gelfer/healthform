import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import "./header.styles.css";

const Header = () => {
  const guestLinks = (
    <ul>
      <li>
        <Link to="/signin">Sign in</Link>
      </li>
    </ul>
  );
  return (
    <nav className="header bg-light">
      <h1>
        <Link to="/">Form</Link>
      </h1>

      <Fragment>{guestLinks}</Fragment>
    </nav>
  );
};

export default Header;
