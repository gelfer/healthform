import axios from "axios";
import { setAlert } from "./alert";

import { GET_FORM, GET_FORMS, FORM_ERROR } from "./types";

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
