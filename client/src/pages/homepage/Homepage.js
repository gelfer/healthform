import React, { Fragment, useEffect } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import FormItem from "../../components/formItem/FormItem";
import { getForms } from "../../actions/forms";

const Home = ({
  getForms,
  auth: { isAuthenticated, loading },
  form: { forms }
}) => {
  useEffect(() => {
    getForms();
  }, [getForms]);
  return (
    <div>
      {!loading && (
        <Fragment>
          {isAuthenticated ? (
            <Fragment>
              <div className="dash-buttons">
                <Link to="/create" className="btn btn-light">
                  Add a new form{" "}
                </Link>
              </div>

              <div className="profiles">
                {forms.length > 0 ? (
                  forms.map(form => (
                    <FormItem key={form._id} form={form}></FormItem>
                  ))
                ) : (
                  <h4>Empty...</h4>
                )}
              </div>
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
  getForms: PropTypes.func.isRequired,
  form: PropTypes.object.isRequired,
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth,
  form: state.form
});

export default connect(mapStateToProps, { getForms })(Home);
