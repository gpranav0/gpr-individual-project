import React, { useRef, useState, useContext } from 'react';
import { AuthContext } from '../context/AuthContext';
import SaveButton from '../components/common/SaveButton';
import { validatePassword } from '../utils/validation';

const Account = ({ view }) => {
  const { logout } = useContext(AuthContext);

  // Uncontrolled components using useRef
  const oldPasswordRef = useRef(null);
  const newPasswordRef = useRef(null);
  const confirmPasswordRef = useRef(null);

  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const [isSaving, setIsSaving] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setError('');
    setSuccess('');

    // Read values directly through refs (Uncontrolled Components requirement)
    const oldPass = oldPasswordRef.current.value;
    const newPass = newPasswordRef.current.value;
    const confirmPass = confirmPasswordRef.current.value;

    if (!oldPass) {
      setError('Current password is required');
      return;
    }

    const passError = validatePassword(newPass);
    if (passError) {
      setError(passError);
      return;
    }

    if (newPass !== confirmPass) {
      setError('New passwords do not match');
      return;
    }

    setIsSaving(true);
    setTimeout(() => {
      setIsSaving(false);
      setSuccess('Password updated successfully!');
      oldPasswordRef.current.value = '';
      newPasswordRef.current.value = '';
      confirmPasswordRef.current.value = '';
    }, 800);
  };

  return (
    <div>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
        <h2 className="section-title" style={{ marginBottom: 0, borderBottom: 'none' }}>Account Overview</h2>
        <button onClick={logout} className="btn" style={{ backgroundColor: 'transparent', color: 'var(--error-color)', border: '1px solid var(--error-color)' }}>
          Logout
        </button>
      </div>

      {view === 'profile' && <p>Manage your public account details here.</p>}
      {view === 'security' && <p>Manage your security preferences.</p>}

      <div style={{ marginTop: '2rem', paddingTop: '2rem', borderTop: '1px solid var(--border-color)' }}>
        <h3 style={{ marginBottom: '1rem', fontSize: '1.125rem' }}>Change Password</h3>
        <p className="toggle-desc" style={{ marginBottom: '1rem' }}>
          This form uses uncontrolled inputs via <code>useRef</code> as required.
        </p>

        {error && <div className="error-message" role="alert" style={{ marginBottom: '1rem', padding: '0.75rem', backgroundColor: 'rgba(239, 68, 68, 0.1)', borderRadius: 'var(--radius-md)' }}>{error}</div>}
        {success && <div role="status" style={{ marginBottom: '1rem', padding: '0.75rem', color: 'var(--success-color)', backgroundColor: 'rgba(16, 185, 129, 0.1)', borderRadius: 'var(--radius-md)' }}>{success}</div>}

        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="old-password" className="form-label">Current Password</label>
            <input
              id="old-password"
              type="password"
              ref={oldPasswordRef}
              className="text-input"
            />
          </div>
          <div className="form-group">
            <label htmlFor="new-password" className="form-label">New Password</label>
            <input
              id="new-password"
              type="password"
              ref={newPasswordRef}
              className="text-input"
            />
            <p id="new-pass-hint" className="toggle-desc" style={{ marginTop: '0.25rem' }}>Must be at least 8 characters long.</p>
          </div>
          <div className="form-group">
            <label htmlFor="confirm-password" className="form-label">Confirm New Password</label>
            <input
              id="confirm-password"
              type="password"
              ref={confirmPasswordRef}
              className="text-input"
            />
          </div>

          <div style={{ marginTop: '2rem' }}>
            <SaveButton isSaving={isSaving} type="submit" />
          </div>
        </form>
      </div>
    </div>
  );
};

export default Account;
