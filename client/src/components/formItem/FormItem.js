import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const FormItem = ({ form: { _id, firstName, lastName, phone } }) => {
  return (
    <div>
      <h1>Phone Number: {phone} </h1>
      <h1>
        Name: {firstName} {lastName}
      </h1>
      <Link to={`/view/${_id}`} className="btn">
        View
      </Link>
      <Link to={`/edit/${_id}`} className="btn">
        Edit
      </Link>
    </div>
  );
};

FormItem.propTypes = {
  form: PropTypes.object.isRequired
};

export default FormItem;
