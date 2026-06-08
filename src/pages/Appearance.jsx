import React, { useState, useEffect } from 'react';
import Dropdown from '../components/common/Dropdown';
import SaveButton from '../components/common/SaveButton';

const Appearance = ({ data, onSave, isSaving }) => {
  const [theme, setTheme] = useState(data);

  useEffect(() => {
    setTheme(data);
  }, [data]);

  const handleChange = (e) => {
    setTheme(e.target.value);
  };

  return (
    <div>
      <h2 className="section-title">Appearance Settings</h2>
      <p style={{ marginBottom: '1.5rem', color: 'var(--text-secondary)' }}>
        Customize the look and feel of your application.
      </p>

      <form onSubmit={(e) => { e.preventDefault(); onSave(theme); }}>
        <Dropdown
          id="theme"
          label="Application Theme"
          value={theme}
          onChange={handleChange}
          options={[
            { label: 'Light Theme', value: 'light' },
            { label: 'Dark Theme', value: 'dark' },
          ]}
        />

        <div style={{ marginTop: '2rem' }}>
          <SaveButton isSaving={isSaving} type="submit" />
        </div>
      </form>
    </div>
  );
};

export default Appearance;
