import { combineReducers } from "redux";
import alert from "./alert";
import register from "./register";
import auth from "./auth";
import form from "./form";

export default combineReducers({
  alert,
  register,
  auth,
  form
});
