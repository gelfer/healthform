import React, { Fragment, useState } from "react";
import { Link, withRouter } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { createForm } from "../../actions/forms";

const CreatePage = ({ createForm, history }) => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    dateOfBirth: "",
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

  const {
    firstName,
    lastName,
    dateOfBirth,
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
  return (
    <Fragment>
      <h1 className="large">Add a New Form</h1>
      <form
        className="form"
        onSubmit={e => {
          e.preventDefault();
          createForm(formData, history);
        }}
      >
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
          <h3>Date of Birth</h3>
          <input
            type="date"
            name="dateOfBirth"
            value={dateOfBirth}
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

CreatePage.propTypes = {
  createForm: PropTypes.func.isRequired
};

export default connect(null, { createForm })(withRouter(CreatePage));
