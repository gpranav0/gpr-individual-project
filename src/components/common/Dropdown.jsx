import React from 'react';

const Dropdown = ({ id, label, value, onChange, options, description }) => {
  return (
    <div className="form-group">
      <label htmlFor={id} className="form-label">{label}</label>
      {description && <p className="toggle-desc" style={{ marginBottom: '0.5rem' }}>{description}</p>}
      <select
        id={id}
        value={value}
        onChange={onChange}
        className="dropdown-select"
      >
        {options.map((opt) => (
          <option key={opt.value} value={opt.value}>
            {opt.label}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Dropdown;
