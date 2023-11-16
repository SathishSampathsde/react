import React from "react";

function InputField({
  label,
  type,
  name,
  handleBlur,
  handleChange,
  values,
  error,
  touched,
}) {
  return (
    <div className="form-group">
      <label className="form-label" htmlFor={name}>
        {label}
      </label>
      <input
        type={type}
        name={name}
        id={name}
        className={`form-control ${
          error && touched ? "border-danger border-1" : ""
        }`}
        onChange={handleChange}
        onBlur={handleBlur}
        value={values}
      />
      {error && touched && (
        <div className="form-text text-danger">{error}</div>
      )}
    </div>
  );
}

export default InputField;
