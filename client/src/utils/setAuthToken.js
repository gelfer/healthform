import axios from "axios";

// adding a global header

const setAuthToken = token => {
  // check if there's a token in localStorage
  // if yes, we set the global header with "x-auth-token"
  if (token) {
    axios.defaults.headers.common["x-auth-token"] = token;
  } else {
    // delete from the header if not found
    delete axios.defaults.headers.common["x-auth-token"];
  }
};

export default setAuthToken;
