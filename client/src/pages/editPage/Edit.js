import React, { Fragment } from "react";
import AddForm from "../../components/addForm/AddForm";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import PropTypes from "prop-types";

const Edit = ({ auth }) => {
  return (
    <Fragment>
      <div>Edit</div>
    </Fragment>
  );
};

Edit.propTypes = {
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default Edit;
