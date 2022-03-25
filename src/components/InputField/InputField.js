import React from "react";
import "./InputField.css";

const InputField = ({ label, error, ...props }) => {
  return (
    <div className="mb-3">
      <label className="text-base" htmlFor={label}>
        {label}
      </label>
      <input
        className={`input ${error ? "input--error" : ""} width-100 mb-1`}
        id={label}
        {...props}
      />
      {error ? <p className="error-text">{error}</p> : null}
    </div>
  );
};

export { InputField };
