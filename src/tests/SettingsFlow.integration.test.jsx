import React from 'react';
import { render, screen, fireEvent, waitFor, act } from '@testing-library/react';
import '@testing-library/jest-dom';
import { MemoryRouter, Routes, Route } from 'react-router-dom';
import { SettingsProvider } from '../context/SettingsContext';
import SettingsContainer from '../containers/SettingsContainer';

describe('Settings Flow Integration', () => {
  beforeEach(() => {
    window.localStorage.clear();
    jest.useFakeTimers();
  });

  afterEach(() => {
    jest.runOnlyPendingTimers();
    jest.useRealTimers();
  });

  it('allows user to change settings, save, stores in localStorage, and shows success message', async () => {
    render(
      <MemoryRouter initialEntries={['/settings/general']}>
        <SettingsProvider>
          <Routes>
            <Route path="/settings/:category" element={<SettingsContainer />} />
          </Routes>
        </SettingsProvider>
      </MemoryRouter>
    );

    // 1. Change setting
    const usernameInput = screen.getByLabelText(/username \*/i);
    fireEvent.change(usernameInput, { target: { value: 'NewUser123' } });

    const emailInput = screen.getByLabelText(/email address \*/i);
    fireEvent.change(emailInput, { target: { value: 'test@example.com' } });

    // 2. Click Save
    const saveButton = screen.getByRole('button', { name: /save settings/i });
    fireEvent.click(saveButton);

    // Verify it shows Saving...
    expect(screen.getByRole('button', { name: /saving\.\.\./i })).toBeInTheDocument();

    // Fast-forward timeout
    act(() => {
      jest.advanceTimersByTime(1000);
    });

    // 3. Success message displayed
    await waitFor(() => {
      expect(screen.getByText('Settings saved successfully!')).toBeInTheDocument();
    });

    // 4. Verify Settings stored in localStorage
    const storedSettings = JSON.parse(window.localStorage.getItem('app-settings'));
    expect(storedSettings.general.username).toBe('NewUser123');
  });
});
