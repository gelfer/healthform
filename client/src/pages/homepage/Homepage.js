import React, { Fragment } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";

const Home = ({ auth: { isAuthenticated, loading } }) => {
  return (
    <div>
      {!loading && (
        <Fragment>
          {isAuthenticated ? <h1>Welcome!</h1> : <h1>Please sign in</h1>}
        </Fragment>
      )}
    </div>
  );
};

Home.propTypes = {
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(mapStateToProps)(Home);
