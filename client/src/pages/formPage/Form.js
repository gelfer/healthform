import React, { Fragment } from "react";
import AddForm from "../../components/addForm/AddForm";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import PropTypes from "prop-types";

const Form = () => {
  return (
    <Fragment>
      <AddForm></AddForm>
    </Fragment>
  );
};

export default Form;
