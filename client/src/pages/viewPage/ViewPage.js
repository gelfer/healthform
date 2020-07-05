import React, { Fragment, useEffect } from "react";
import PropTypes from "prop-types";
import { Link, withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { getForm, deleteForm } from "../../actions/forms";
import Spinner from "../../components/spinner/Spinner";
import "./viewPage.styles.css";

const ViewPage = ({
  getForm,
  deleteForm,
  form: { form, loading },
  match,
  history
}) => {
  useEffect(() => {
    getForm(match.params.id);
  }, [getForm, match.params.id, history]);
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

          <button
            onClick={e => deleteForm(match.params.id, history)}
            type="button"
            className="btn btn-danger"
          >
            <i className="fas fa-trash"></i>
          </button>

          <div className="template pt">
            <h1>Information</h1>
            <h4>
              Name: {form.firstName} {form.lastName}
            </h4>
            <h4>Age: {form.age}</h4>
            <h4>Phone Number: {form.phone}</h4>
            <h4>Email: {form.email}</h4>
            <h4>
              Allergies:{" "}
              {form.allergy.map((el, index) => (
                <li key={index} className="text-primary">
                  {" "}
                  {el}
                </li>
              ))}
            </h4>
            <h4>
              Medications:{" "}
              {form.medication.map((el, index) => (
                <li key={index} className="text-primary">
                  {" "}
                  {el}
                </li>
              ))}
            </h4>
            <h4>
              Address: {form.address.number} {form.address.street}{" "}
              {form.address.district} {form.address.province}{" "}
              {form.address.zipCode}
            </h4>
          </div>
        </Fragment>
      )}
    </Fragment>
  );
};

ViewPage.propTypes = {
  getForm: PropTypes.func.isRequired,
  deleteForm: PropTypes.func.isRequired,
  form: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  form: state.form
});

export default connect(mapStateToProps, { getForm, deleteForm })(
  withRouter(ViewPage)
);
