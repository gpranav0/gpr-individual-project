import React from 'react';
import { Outlet } from 'react-router-dom';
import Account from '../pages/Account';

const AccountContainer = () => {
  return (
    <div className="glass-panel">
      <Account />
      <div style={{ marginTop: '2rem' }}>
        <Outlet />
      </div>
    </div>
  );
};

export default AccountContainer;
