import React from 'react';

const ToggleSwitch = ({ checked, onChange, label, description, id }) => {
  return (
    <div className="toggle-wrapper">
      <div className="toggle-info">
        <span className="toggle-label" id={`${id}-label`}>{label}</span>
        {description && <span className="toggle-desc" id={`${id}-desc`}>{description}</span>}
      </div>
      <button
        type="button"
        id={id}
        className={`toggle-switch ${checked ? 'checked' : ''}`}
        onClick={() => onChange(!checked)}
      >
        <span className="toggle-thumb" />
      </button>
    </div>
  );
};

export default ToggleSwitch;
