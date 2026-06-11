import React from 'react';
const SaveButton = ({ onClick, isSaving, disabled, type = "button" }) => {
  return (
    <button
      type={type}
      className="btn btn-primary"
      onClick={onClick}
      disabled={disabled || isSaving}
    >
      <span style={{ fontSize: '1.2rem', marginRight: '4px' }}>💾</span>
      {isSaving ? 'Saving...' : 'Save Settings'}
    </button>
  );
};

export default SaveButton;
