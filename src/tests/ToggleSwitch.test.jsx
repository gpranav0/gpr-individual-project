import React, { useState } from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import ToggleSwitch from '../components/common/ToggleSwitch';

const TestWrapper = () => {
  const [checked, setChecked] = useState(false);
  return (
    <ToggleSwitch 
      id="test-toggle" 
      label="Test Toggle" 
      checked={checked} 
      onChange={setChecked} 
    />
  );
};

describe('ToggleSwitch Component', () => {
  it('toggles state correctly when clicked', () => {
    render(<TestWrapper />);
    const toggle = screen.getByRole('switch', { name: /test toggle/i });
    
    // Initial state
    expect(toggle).toHaveAttribute('aria-checked', 'false');
    
    // Click to toggle
    fireEvent.click(toggle);
    expect(toggle).toHaveAttribute('aria-checked', 'true');
    
    // Click again to toggle back
    fireEvent.click(toggle);
    expect(toggle).toHaveAttribute('aria-checked', 'false');
  });
});
