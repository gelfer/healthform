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
        <h1>Loading...</h1>
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
            <p>
              <strong>Name:</strong> {form.firstName} {form.lastName}
            </p>
            <p>
              <strong>Age:</strong> {form.age}
            </p>
            <p>
              <strong>Phone Number:</strong> {form.phone}
            </p>
            {form.email && (
              <p>
                <strong>Email:</strong> {form.email}
              </p>
            )}

            {form.allergy && (
              <p>
                <strong>Allergies: </strong>
                {form.allergy.map((el, index) => (
                  <li key={index} className="text-primary">
                    {" "}
                    {el}
                  </li>
                ))}
              </p>
            )}

            {form.medication && (
              <p>
                <strong>Medications: </strong>
                {form.medication.map((el, index) => (
                  <li key={index} className="text-primary">
                    {" "}
                    {el}
                  </li>
                ))}
              </p>
            )}

            <p>
              <strong>Address: </strong>
            </p>

            {form.address && (
              <div id="address">
                {form.address.number && <p>{form.address.number}</p>}

                {form.address.street && <p>{form.address.street}</p>}

                {form.address.district && <p>{form.address.district}</p>}

                {form.address.province && <p>{form.address.province}</p>}

                {form.address.zipCode && <p>{form.address.zipCode}</p>}
              </div>
            )}
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
