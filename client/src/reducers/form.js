import { GET_FORM, GET_FORMS, FORM_ERROR, CLEAR_FORM } from "../actions/types";

const initialState = {
  form: null,
  forms: [],
  loading: true,
  error: {}
};

export default function(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case GET_FORM:
      return {
        ...state,
        form: payload,
        loading: false
      };
    case GET_FORMS:
      return {
        ...state,
        forms: payload,
        loading: false
      };
    case CLEAR_FORM:
      return {
        ...state,
        form: null,
        forms: [],
        loading: false
      };
    case FORM_ERROR:
      return {
        ...state,
        error: payload,
        loading: false
      };
    default:
      return state;
  }
}
