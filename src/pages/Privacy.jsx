import React, { useState, useEffect } from 'react';
import Dropdown from '../components/common/Dropdown';
import ToggleSwitch from '../components/common/ToggleSwitch';
import SaveButton from '../components/common/SaveButton';

const Privacy = ({ data, onSave, isSaving }) => {
  const [formData, setFormData] = useState(data);

  useEffect(() => {
    setFormData(data);
  }, [data]);

  const handleChange = (field, isToggle = false) => (value) => {
    setFormData(prev => ({ ...prev, [field]: isToggle ? value : value.target.value }));
  };

  return (
    <div>
      <h2 className="section-title">Privacy Settings</h2>
      <form onSubmit={(e) => { e.preventDefault(); onSave(formData); }}>
        <Dropdown
          id="profileVisibility"
          label="Profile Visibility"
          description="Choose who can see your public profile"
          value={formData.profileVisibility}
          onChange={handleChange('profileVisibility')}
          options={[
            { label: 'Public - Anyone can see', value: 'public' },
            { label: 'Private - Only you can see', value: 'private' },
            { label: 'Friends - Only mutual friends', value: 'friends' },
          ]}
        />

        <div style={{ marginTop: '1.5rem' }}>
          <ToggleSwitch
            id="dataSharing"
            label="Share Diagnostic Data"
            description="Help us improve the app by sharing anonymous usage data"
            checked={formData.dataSharing}
            onChange={handleChange('dataSharing', true)}
          />
        </div>

        <div style={{ marginTop: '2rem' }}>
          <SaveButton isSaving={isSaving} type="submit" />
        </div>
      </form>
    </div>
  );
};

export default Privacy;
