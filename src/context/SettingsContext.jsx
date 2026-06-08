import React, { createContext, useMemo } from 'react';
import { useLocalStorage } from '../hooks/useLocalStorage';

export const SettingsContext = createContext();

const defaultSettings = {
  theme: 'dark', // Starting with dark theme for premium feel
  general: {
    username: '',
    email: '',
    language: 'en',
  },
  notifications: {
    email: true,
    sms: false,
    push: true,
    marketing: false,
  },
  privacy: {
    profileVisibility: 'public',
    dataSharing: false,
  }
};

export const SettingsProvider = ({ children }) => {
  const [settings, setSettings] = useLocalStorage('app-settings', defaultSettings);
  
  const updateSettings = (category, updates) => {
    setSettings((prev) => ({
      ...prev,
      [category]: typeof updates === 'object' && !Array.isArray(updates) && updates !== null 
        ? { ...prev[category], ...updates } 
        : updates,
    }));
  };

  const contextValue = useMemo(() => ({
    settings,
    updateSettings,
  }), [settings]);

  return (
    <SettingsContext.Provider value={contextValue}>
      {children}
    </SettingsContext.Provider>
  );
};
