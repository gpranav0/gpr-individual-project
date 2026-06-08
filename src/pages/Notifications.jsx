import React, { useState, useEffect } from 'react';
import ToggleSwitch from '../components/common/ToggleSwitch';
import SaveButton from '../components/common/SaveButton';

const Notifications = ({ data, onSave, isSaving, totalEnabled }) => {
  const [formData, setFormData] = useState(data);

  useEffect(() => {
    setFormData(data);
  }, [data]);

  const handleChange = (field) => (checked) => {
    setFormData(prev => ({ ...prev, [field]: checked }));
  };

  return (
    <div>
      <h2 className="section-title">Notifications</h2>
      <p style={{ marginBottom: '1.5rem', color: 'var(--text-secondary)' }}>
        Manage how you receive updates. Total Enabled Notifications: <strong>{totalEnabled}</strong>
      </p>

      <form onSubmit={(e) => { e.preventDefault(); onSave(formData); }}>
        <ToggleSwitch
          id="notif-email"
          label="Email Notifications"
          description="Receive daily summary emails"
          checked={formData.email}
          onChange={handleChange('email')}
        />
        <ToggleSwitch
          id="notif-sms"
          label="SMS Notifications"
          description="Receive texts for urgent alerts"
          checked={formData.sms}
          onChange={handleChange('sms')}
        />
        <ToggleSwitch
          id="notif-push"
          label="Push Notifications"
          description="Receive in-app push notifications"
          checked={formData.push}
          onChange={handleChange('push')}
        />
        <ToggleSwitch
          id="notif-marketing"
          label="Marketing Emails"
          description="Receive offers and product updates"
          checked={formData.marketing}
          onChange={handleChange('marketing')}
        />

        <div style={{ marginTop: '2rem' }}>
          <SaveButton isSaving={isSaving} type="submit" />
        </div>
      </form>
    </div>
  );
};

export default Notifications;
