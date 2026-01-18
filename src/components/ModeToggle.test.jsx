import { describe, it, expect, beforeEach } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import ModeToggle from './ModeToggle';

describe('ModeToggle', () => {
  beforeEach(() => {
    localStorage.clear();
    document.documentElement.classList.remove('dark');
  });

  it('renders toggle switch', () => {
    render(<ModeToggle />);
    const toggle = screen.getByRole('switch', { name: /Toggle dark mode/i });
    expect(toggle).toBeInTheDocument();
  });

  it('defaults to dark mode', () => {
    render(<ModeToggle />);
    const toggle = screen.getByRole('switch');
    expect(toggle).toBeChecked();
    expect(document.documentElement.classList.contains('dark')).toBe(true);
  });

  it('toggles dark mode when clicked', async () => {
    const user = userEvent.setup();
    render(<ModeToggle />);
    const toggle = screen.getByRole('switch');
    
    expect(toggle).toBeChecked();
    await user.click(toggle);
    
    expect(toggle).not.toBeChecked();
    expect(document.documentElement.classList.contains('dark')).toBe(false);
  });

  it('saves preference to localStorage', async () => {
    const user = userEvent.setup();
    render(<ModeToggle />);
    const toggle = screen.getByRole('switch');
    
    await user.click(toggle);
    expect(localStorage.getItem('darkMode')).toBe('false');
  });
});
