import React, { useState, useEffect } from 'react';
import TextInput from '../components/common/TextInput';
import Dropdown from '../components/common/Dropdown';
import SaveButton from '../components/common/SaveButton';
import { validateUsername, validateEmail } from '../utils/validation';

const General = ({ data, onSave, isSaving }) => {
  const [formData, setFormData] = useState(data);
  const [errors, setErrors] = useState({});

  useEffect(() => {
    setFormData(data);
  }, [data]);

  const handleChange = (field) => (e) => {
    const value = e.target.value;
    setFormData(prev => ({ ...prev, [field]: value }));
    
    // Real-time validation
    if (field === 'username') {
      setErrors(prev => ({ ...prev, username: validateUsername(value) }));
    }
    if (field === 'email') {
      setErrors(prev => ({ ...prev, email: validateEmail(value) }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const usernameError = validateUsername(formData.username);
    const emailError = validateEmail(formData.email);
    
    if (usernameError || emailError) {
      setErrors({ username: usernameError, email: emailError });
      return;
    }
    
    onSave(formData);
  };

  return (
    <div>
      <h2 className="section-title">General Settings</h2>
      <form onSubmit={handleSubmit} noValidate>
        <TextInput
          id="username"
          label="Username"
          value={formData.username}
          onChange={handleChange('username')}
          error={errors.username}
          required
        />
        <TextInput
          id="email"
          label="Email Address"
          type="email"
          value={formData.email}
          onChange={handleChange('email')}
          error={errors.email}
          required
        />
        <Dropdown
          id="language"
          label="Language"
          value={formData.language}
          onChange={handleChange('language')}
          options={[
            { label: 'English', value: 'en' },
            { label: 'Spanish', value: 'es' },
            { label: 'French', value: 'fr' },
          ]}
        />
        <div style={{ marginTop: '2rem' }}>
          <SaveButton isSaving={isSaving} type="submit" />
        </div>
      </form>
    </div>
  );
};

export default General;
