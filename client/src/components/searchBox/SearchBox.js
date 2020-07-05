import React from "react";
import "./searchBox.styles.css";

export const SearchBox = ({ placeholder, handleChange }) => (
  <input
    className="search my-2"
    type="search"
    placeholder={placeholder}
    onChange={handleChange}
  ></input>
);
