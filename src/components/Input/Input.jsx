import React from "react";
import "./Input.css";

const Input = ({ label, name, type, setValue, placeholder, value }) => {
  return (
    <div className="main">
      <div className="labelCon">
        {label && <label htmlFor={name}>{label}</label>}
      </div>

      <input
        type={type}
        className="input"
        value={value}
        name={name}
        required
        id={name}
        placeholder={placeholder}
        onChange={(e) => {
          setValue(e.target.value);
        }}
      />
    </div>
  );
};

export default Input;
