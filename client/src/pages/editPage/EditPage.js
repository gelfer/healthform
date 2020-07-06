import React, { Fragment, useState, useEffect } from "react";
import { Link, withRouter } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import { getForm, editForm } from "../../actions/forms";

const EditPage = ({
  form: { form, loading },
  getForm,
  editForm,
  match,
  history
}) => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    age: "",
    email: "",
    phone: "",
    allergy: "",
    medication: "",
    number: "",
    street: "",
    district: "",
    province: "",
    zipCode: ""
  });

  useEffect(() => {
    getForm(match.params.id);

    setFormData({
      firstName: loading || !form.firstName ? "" : form.firstName,
      lastName: loading || !form.lastName ? "" : form.lastName,
      age: loading || !form.age ? "" : form.age,
      email: loading || !form.email ? "" : form.email,
      phone: loading || !form.phone ? "" : form.phone,
      allergy: loading || !form.allergy ? "" : form.allergy.join(","),
      medication: loading || !form.medication ? "" : form.medication.join(","),
      number: loading || !form.address ? "" : form.address.number,
      street: loading || !form.address ? "" : form.address.street,
      district: loading || !form.address ? "" : form.address.district,
      province: loading || !form.address ? "" : form.address.province,
      zipCode: loading || !form.address ? "" : form.address.zipCode
    });
  }, [loading, getForm]);

  const {
    firstName,
    lastName,
    age,
    email,
    phone,
    allergy,
    medication,
    number,
    street,
    district,
    province,
    zipCode
  } = formData;

  const onChange = e =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = e => {
    e.preventDefault();
    editForm(form._id, formData, history);
  };

  return (
    <Fragment>
      <h1 className="large">Create a New Form</h1>
      <form className="form" onSubmit={e => onSubmit(e)}>
        <div className="form-group">
          <input
            type="text"
            placeholder="First Name"
            name="firstName"
            value={firstName}
            onChange={e => onChange(e)}
            required
          />
          <small className="form-text">Required.</small>
        </div>
        <div className="form-group">
          <input
            type="text"
            placeholder="Last Name"
            name="lastName"
            value={lastName}
            onChange={e => onChange(e)}
            required
          />
          <small className="form-text">Required.</small>
        </div>

        <div className="form-group">
          <input
            type="text"
            placeholder="Age"
            name="age"
            value={age}
            onChange={e => onChange(e)}
            required
          />
          <small className="form-text">Required.</small>
        </div>

        <div className="form-group">
          <input
            type="text"
            placeholder="Phone Number"
            name="phone"
            value={phone}
            onChange={e => onChange(e)}
            required
          />
          <small className="form-text">Required.</small>
        </div>

        <div className="form-group">
          <input
            type="text"
            placeholder="Email Address"
            name="email"
            value={email}
            onChange={e => onChange(e)}
          />
        </div>

        <div className="form-group">
          <textarea
            rows="6"
            cols="70"
            placeholder="Allergies"
            name="allergy"
            value={allergy}
            onChange={e => onChange(e)}
          ></textarea>
        </div>

        <div className="form-group">
          <textarea
            rows="6"
            cols="70"
            placeholder="Medications"
            name="medication"
            value={medication}
            onChange={e => onChange(e)}
          ></textarea>
        </div>

        <div className="form-group">
          <h3>Address</h3>
          <input
            type="text"
            placeholder="Number"
            name="number"
            value={number}
            onChange={e => onChange(e)}
          />
        </div>

        <div className="form-group">
          <input
            type="text"
            placeholder="Street"
            name="street"
            value={street}
            onChange={e => onChange(e)}
          />
        </div>

        <div className="form-group">
          <input
            type="text"
            placeholder="District"
            name="district"
            value={district}
            onChange={e => onChange(e)}
          />
        </div>

        <div className="form-group">
          <input
            type="text"
            placeholder="Province"
            name="province"
            value={province}
            onChange={e => onChange(e)}
          />
        </div>

        <div className="form-group">
          <input
            type="text"
            placeholder="Zipcode"
            name="zipCode"
            value={zipCode}
            onChange={e => onChange(e)}
          />
        </div>

        <input type="submit" className="btn btn-success my-1" />
        <Link className="btn my-1" to="/">
          Go Back
        </Link>
      </form>
    </Fragment>
  );
};

EditPage.propTypes = {
  getForm: PropTypes.func.isRequired,
  editForm: PropTypes.func.isRequired,
  form: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  form: state.form
});

export default connect(mapStateToProps, { getForm, editForm })(
  withRouter(EditPage)
);
