import React from 'react';

const TextInput = React.memo(({ 
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
        aria-invalid={error ? 'true' : 'false'}
        aria-describedby={error ? `${id}-error` : undefined}
      />
      {error && (
        <div id={`${id}-error`} className="error-message" role="alert">
          {error}
        </div>
      )}
    </div>
  );
});

TextInput.displayName = 'TextInput';
export default TextInput;
