import React from 'react';
import { NavLink } from 'react-router-dom';

const Sidebar = () => {
  const navItems = [
    { path: '/settings/general', label: 'General', icon: '⚙️' },
    { path: '/settings/notifications', label: 'Notifications', icon: '🔔' },
    { path: '/settings/privacy', label: 'Privacy', icon: '🛡️' },
    { path: '/settings/appearance', label: 'Appearance', icon: '🎨' },
    { path: '/settings/portfolio', label: 'Portfolio', icon: '💼' },
    { path: '/settings/account', label: 'Account', icon: '👤' },
  ];

  return (
    <aside className="sidebar">
      <h1 className="sidebar-title">Settings UI</h1>
      <nav>
        {navItems.map((item) => (
          <NavLink
            key={item.path}
            to={item.path}
            className={({ isActive }) => `nav-item ${isActive ? 'active' : ''}`}
          >
            <span className="nav-icon" style={{ fontSize: '1.2rem' }}>{item.icon}</span>
            <span>{item.label}</span>
          </NavLink>
        ))}
      </nav>
    </aside>
  );
};

export default Sidebar;
