import React from 'react';
import { Save } from 'lucide-react';

const SaveButton = React.memo(({ onClick, isSaving, disabled, type = "button" }) => {
  return (
    <button 
      type={type}
      className="btn btn-primary"
      onClick={onClick}
      disabled={disabled || isSaving}
    >
      <Save size={18} />
      {isSaving ? 'Saving...' : 'Save Settings'}
    </button>
  );
});

SaveButton.displayName = 'SaveButton';
export default SaveButton;
