import React from "react";
import "./Input.css";
import { ErrorMessage, useField } from "formik";
const Input = (props) => {
  const { id, className, type, placeholder, name, label } = props;
  const [field, meta] = useField(props);
  return (
    <div className="text-left">
      <label htmlFor={field.name} className="text-label text-gray text-md">
        {label}
      </label>
      <div>
        <input
        {...props}
          name={name}
          id={id}
          className={className}
          type={type}
          placeholder={placeholder}
          className={`${className} ${meta.touched && meta.error && "error"}`}
        />
      </div>
      <ErrorMessage
        name={field.name}
        component="div"
        className="error-message"
      />
    </div>
  );
};

export { Input };
