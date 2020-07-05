import React, { Fragment } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import FormItem from "../../components/formItem/FormItem";

const Home = ({ auth: { isAuthenticated, loading } }) => {
  return (
    <div>
      {!loading && (
        <Fragment>
          {isAuthenticated ? (
            <Fragment>
              <div className="dash-buttons">
                <Link to="/form" className="btn btn-light">
                  Add a new form{" "}
                </Link>
              </div>

              <FormItem></FormItem>
            </Fragment>
          ) : (
            <h1>Please sign in</h1>
          )}
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
