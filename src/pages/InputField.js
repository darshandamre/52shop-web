import React from "react";

const InputField = ({ label, ...props }) => {
  return (
    <>
      <label className="text-base" htmlFor={label}>
        {label}
      </label>
      <input className="input width-100 mb-3" id={label} {...props} />
    </>
  );
};

export { InputField };
