import React from 'react';

const ToggleSwitch = React.memo(({ checked, onChange, label, description, id }) => {
  return (
    <div className="toggle-wrapper">
      <div className="toggle-info">
        <span className="toggle-label" id={`${id}-label`}>{label}</span>
        {description && <span className="toggle-desc" id={`${id}-desc`}>{description}</span>}
      </div>
      <button
        type="button"
        id={id}
        className="toggle-switch"
        role="switch"
        aria-checked={checked}
        aria-labelledby={`${id}-label`}
        aria-describedby={description ? `${id}-desc` : undefined}
        onClick={() => onChange(!checked)}
      >
        <span className="toggle-thumb" />
      </button>
    </div>
  );
});

ToggleSwitch.displayName = 'ToggleSwitch';
export default ToggleSwitch;
