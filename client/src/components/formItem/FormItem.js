import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import "./formItem.styles.css";

const FormItem = ({ form: { _id, firstName, lastName, phone } }) => {
  return (
    <div className="template">
      <h3>
        <span className="title">Name: </span>
        {firstName} {lastName}
      </h3>
      <h3>
        <span className="title">Phone No.: </span>
        {phone}{" "}
      </h3>
      <Link to={`/view/${_id}`} className="btn" id="mt">
        View
      </Link>
    </div>
  );
};

FormItem.propTypes = {
  form: PropTypes.object.isRequired
};

export default FormItem;
