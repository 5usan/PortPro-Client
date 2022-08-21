import React from "react";
import "./Button.css";

const Button = ({ buttonName, clickHandler, type }) => {
  return (
    <button
      type={type}
      onClick={(e) => {
        type !== "submit" && clickHandler(e);
      }}
      className="btn"
    >
      {buttonName}
    </button>
  );
};

export default Button;
