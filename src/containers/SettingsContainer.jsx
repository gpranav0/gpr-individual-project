import React, { useContext, useState, useMemo, useCallback, useEffect } from 'react';
import { useParams, Navigate } from 'react-router-dom';
import { SettingsContext } from '../context/SettingsContext';
import General from '../pages/General';
import Notifications from '../pages/Notifications';
import Privacy from '../pages/Privacy';
import Appearance from '../pages/Appearance';
import ErrorBoundary from '../components/common/ErrorBoundary';

const SettingsContainer = () => {
  const { category } = useParams();
  const { settings, updateSettings } = useContext(SettingsContext);
  const [isSaving, setIsSaving] = useState(false);
  const [successMessage, setSuccessMessage] = useState('');

  useEffect(() => {
    setSuccessMessage('');
  }, [category]);

  const handleSave = useCallback(async (categoryName, newSettings) => {
    setIsSaving(true);
    setSuccessMessage('');
    await new Promise(resolve => setTimeout(resolve, 800));
    updateSettings(categoryName, newSettings);
    setIsSaving(false);
    setSuccessMessage('Settings saved successfully!');
    setTimeout(() => setSuccessMessage(''), 3000);
  }, [updateSettings]);

  const totalEnabledNotifications = useMemo(() => {
    return Object.values(settings.notifications).filter(Boolean).length;
  }, [settings.notifications]);

  const renderCategory = () => {
    switch(category) {
      case 'general':
        return <General data={settings.general} onSave={(data) => handleSave('general', data)} isSaving={isSaving} />;
      case 'notifications':
        return <Notifications data={settings.notifications} onSave={(data) => handleSave('notifications', data)} isSaving={isSaving} totalEnabled={totalEnabledNotifications} />;
      case 'privacy':
        return <Privacy data={settings.privacy} onSave={(data) => handleSave('privacy', data)} isSaving={isSaving} />;
      case 'appearance':
        return <Appearance data={settings.theme} onSave={(data) => handleSave('theme', data)} isSaving={isSaving} />;
      default:
        return null;
    }
  };

  const isValidCategory = ['general', 'notifications', 'privacy', 'appearance'].includes(category);
  if (!isValidCategory) {
    return <Navigate to="/settings/general" replace />;
  }

  return (
    <ErrorBoundary>
      <div className="glass-panel" style={{ position: 'relative' }}>
        {successMessage && (
          <div role="status" aria-live="polite" style={{
            position: 'absolute', top: '-1rem', left: '0', right: '0', 
            backgroundColor: 'var(--success-color)', color: 'white', 
            padding: '0.5rem', borderRadius: 'var(--radius-md)', textAlign: 'center',
            transform: 'translateY(-100%)', zIndex: 10
          }}>
            {successMessage}
          </div>
        )}
        {renderCategory()}
      </div>
    </ErrorBoundary>
  );
};

export default SettingsContainer;
