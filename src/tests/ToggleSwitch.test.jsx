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
    const toggle = document.getElementById('test-toggle');
    
    // Initial state - should not have 'checked' class
    expect(toggle).not.toHaveClass('checked');
    
    // Click to toggle
    fireEvent.click(toggle);
    expect(toggle).toHaveClass('checked');
    
    // Click again to toggle back
    fireEvent.click(toggle);
    expect(toggle).not.toHaveClass('checked');
  });
});
