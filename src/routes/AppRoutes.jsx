import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import MainLayout from '../components/layout/MainLayout';
import PrivateRoute from './PrivateRoute';
import ErrorBoundary from '../components/common/ErrorBoundary';

import Login from '../pages/Login';
import SettingsContainer from '../containers/SettingsContainer';
import AccountContainer from '../containers/AccountContainer';

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/" element={<Navigate to="/settings/general" replace />} />
      
      <Route 
        path="/settings" 
        element={
          <ErrorBoundary>
            <MainLayout />
          </ErrorBoundary>
        }
      >
        {/* Protected Routing with Nested Routes */}
        <Route 
          path="account" 
          element={
            <PrivateRoute>
              <AccountContainer />
            </PrivateRoute>
          }
        >
          <Route index element={<Navigate to="profile" replace />} />
          <Route path="profile" element={<div>Profile Settings</div>} />
          <Route path="security" element={<div>Security Settings</div>} />
        </Route>

        {/* Dynamic Route for category-based settings */}
        <Route path=":category" element={<SettingsContainer />} />
      </Route>

      <Route path="*" element={<Navigate to="/settings/general" replace />} />
    </Routes>
  );
};

export default AppRoutes;
