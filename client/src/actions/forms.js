import axios from "axios";
import { setAlert } from "./alert";

import {
  GET_FORM,
  GET_FORMS,
  FORM_ERROR,
  CLEAR_FORM,
  CREATE_FORM
} from "./types";

// Get form by id
export const getForm = id => async dispatch => {
  try {
    const res = await axios.get(`/api/forms/${id}`);

    dispatch({
      type: GET_FORM,
      payload: res.data
    });
  } catch (err) {
    dispatch({
      type: FORM_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status }
    });
  }
};

// Get all forms
export const getForms = () => async dispatch => {
  try {
    const res = await axios.get("/api/forms");
    dispatch({ type: CLEAR_FORM });

    dispatch({
      type: GET_FORMS,
      payload: res.data
    });
  } catch (err) {
    dispatch({
      type: FORM_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status }
    });
  }
};

// Create form
export const createForm = (formData, history) => async dispatch => {
  try {
    const config = {
      headers: {
        "Content-type": "application/json"
      }
    };

    const res = await axios.post("/api/forms", formData, config);

    dispatch({
      type: CREATE_FORM,
      payload: res.data
    });

    dispatch(setAlert("Profile created", "success"));

    history.push("/");
  } catch (err) {
    const errors = err.response.data.errors;

    if (errors) {
      errors.forEach(error => dispatch(setAlert(error.msg, "danger")));
    }
    dispatch({
      type: FORM_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status }
    });
  }
};
