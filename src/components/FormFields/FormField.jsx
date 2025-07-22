import React from 'react';

const FormField = ({
  label,
  type = "text",
  name,
  value,
  onChange,
  required = false,
  placeholder = "",
  options = [],
  as = "input",
  ...rest
}) => {
  if (as === "select") {
    return (
      <div className="field-group">
        <label className="form-label">{label} {required && <span className="text-danger">*</span>}</label>
        <select
          name={name}
          value={value}
          onChange={onChange}
          required={required}
          className="form-control form-select"
          {...rest}
        >
          <option value="" disabled>Please Choose an Option</option>
          {options.map(opt => (
            <option key={opt.value} value={opt.value}>{opt.label}</option>
          ))}
        </select>
      </div>
    );
  }
  if (as === "textarea") {
    return (
      <div className="field-group">
        <label className="form-label">{label}</label>
        <textarea
          name={name}
          value={value}
          onChange={onChange}
          className="form-control"
          rows={rest.rows || 4}
          placeholder={placeholder}
        />
      </div>
    );
  }
  return (
    <div className="field-group">
      <label className="form-label">{label} {required && <span className="text-danger">*</span>}</label>
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        required={required}
        className="form-control"
        placeholder={placeholder}
        {...rest}
      />
    </div>
  );
};

export default FormField;
