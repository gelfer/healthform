import axios from "axios";
import { setAlert } from "./alert";
import { SIGNUP_SUCCESS, SIGNUP_FAIL } from "./types";

// Register User
export const signup = ({ username, email, password }) => async dispatch => {
  const config = {
    headers: {
      "Content-type": "application/json"
    }
  };

  const body = JSON.stringify({ username, email, password });

  try {
    const res = await axios.post("/api/register", body, config);

    dispatch({
      type: SIGNUP_SUCCESS,
      payload: res.data
    });
  } catch (error) {
    const errors = error.response.data.errors;

    if (errors) {
      errors.forEach(error => dispatch(setAlert(error.msg, "danger")));
    }
    dispatch({
      type: SIGNUP_FAIL
    });
  }
};
