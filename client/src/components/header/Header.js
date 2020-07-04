import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { signout } from "../../actions/auth";
import "./header.styles.css";

const Header = ({ auth: { isAuthenticated, loading }, signout }) => {
  const authLinks = (
    <ul>
      <li>
        <a onClick={signout} href="#!">
          Sign out
        </a>
      </li>
    </ul>
  );
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
      {!loading && (
        <Fragment>{isAuthenticated ? authLinks : guestLinks}</Fragment>
      )}
    </nav>
  );
};

Header.propTypes = {
  signout: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(mapStateToProps, { signout })(Header);
