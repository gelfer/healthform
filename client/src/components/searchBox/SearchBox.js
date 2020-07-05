import React, { Fragment } from "react";
import "./searchBox.styles.css";

export const SearchBox = ({ placeholder, handleChange }) => (
  <Fragment>
    <input
      className="search my-2"
      type="search"
      placeholder={placeholder}
      onChange={handleChange}
    ></input>
  </Fragment>
);
