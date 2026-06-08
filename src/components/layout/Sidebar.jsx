import React from 'react';
import { NavLink } from 'react-router-dom';
import { Settings, Bell, Shield, Palette, User } from 'lucide-react';

const Sidebar = () => {
  const navItems = [
    { path: '/settings/general', label: 'General', icon: <Settings size={20} /> },
    { path: '/settings/notifications', label: 'Notifications', icon: <Bell size={20} /> },
    { path: '/settings/privacy', label: 'Privacy', icon: <Shield size={20} /> },
    { path: '/settings/appearance', label: 'Appearance', icon: <Palette size={20} /> },
    { path: '/settings/account', label: 'Account', icon: <User size={20} /> },
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
            {item.icon}
            <span>{item.label}</span>
          </NavLink>
        ))}
      </nav>
    </aside>
  );
};

export default Sidebar;
