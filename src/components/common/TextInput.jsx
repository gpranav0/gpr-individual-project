import React from 'react';

const TextInput = ({ 
  id, 
  label, 
  type = 'text', 
  value, 
  onChange, 
  error, 
  placeholder,
  required
}) => {
  return (
    <div className="form-group">
      <label htmlFor={id} className="form-label">
        {label} {required && '*'}
      </label>
      <input
        id={id}
        type={type}
        value={value}
        onChange={onChange}
        className={`text-input ${error ? 'error' : ''}`}
        placeholder={placeholder}
      />
      {error && (
        <div id={`${id}-error`} className="error-message">
          {error}
        </div>
      )}
    </div>
  );
};

export default TextInput;
