import React, { Fragment, useEffect } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { getForm } from "../../actions/forms";

const ViewPage = ({ getForm, form: { form, loading }, match }) => {
  useEffect(() => {
    getForm(match.params.id);
  }, [getForm, match.params.id]);
  return (
    <Fragment>
      {form === null || loading ? (
        <h1>Nothing to show</h1>
      ) : (
        <Fragment>
          <Link to="/" className="btn btn-light">
            Back to Home
          </Link>

          <Link to={`/edit/${match.params.id}`} className="btn">
            Edit
          </Link>

          <h1>{form.firstName}</h1>
          <h1>{form.dateOfBirth}</h1>
        </Fragment>
      )}
    </Fragment>
  );
};

ViewPage.propTypes = {
  getForm: PropTypes.func.isRequired,
  form: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  form: state.form
});

export default connect(mapStateToProps, { getForm })(ViewPage);
