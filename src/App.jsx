import React, { useContext, useEffect } from 'react';
import { BrowserRouter } from 'react-router-dom';
import AppRoutes from './routes/AppRoutes';
import { SettingsProvider, SettingsContext } from './context/SettingsContext';
import { AuthProvider } from './context/AuthContext';

// A wrapper to apply the theme to the body
const ThemeApplier = ({ children }) => {
  const { settings } = useContext(SettingsContext);
  
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', settings.theme);
  }, [settings.theme]);

  return children;
};

const App = () => {
  return (
    <AuthProvider>
      <SettingsProvider>
        <ThemeApplier>
          <BrowserRouter>
            <AppRoutes />
          </BrowserRouter>
        </ThemeApplier>
      </SettingsProvider>
    </AuthProvider>
  );
};

export default App;
