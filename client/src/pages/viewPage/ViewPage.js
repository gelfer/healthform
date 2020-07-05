import React, { Fragment, useEffect } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { getForm } from "../../actions/forms";
import Spinner from "../../components/spinner/Spinner";
import "./viewPage.styles.css";

const ViewPage = ({ getForm, form: { form, loading }, match }) => {
  useEffect(() => {
    getForm(match.params.id);
  }, [getForm, match.params.id]);
  return loading && form === null ? (
    <Spinner></Spinner>
  ) : (
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

          <div className="template pt">
            <h1>Information</h1>
            <h3>{form.firstName}</h3>
            <h3>{form.dateOfBirth}</h3>
          </div>
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
