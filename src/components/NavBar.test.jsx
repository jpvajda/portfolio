import { describe, it, expect, beforeEach } from 'vitest';
import { render, screen } from '@testing-library/react';
import NavBar from './NavBar';

describe('NavBar', () => {
  beforeEach(() => {
    // Clear localStorage before each test
    localStorage.clear();
  });

  it('renders navigation with name', () => {
    render(<NavBar />);
    expect(screen.getByText(/John P. Vajda/)).toBeInTheDocument();
  });

  it('renders desktop navigation links', () => {
    render(<NavBar />);
    expect(screen.getByRole('link', { name: /Navigate to Core Competencies section/i })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /Navigate to Technical Skills section/i })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /Navigate to Certifications section/i })).toBeInTheDocument();
  });

  it('has proper aria-label for navigation', () => {
    render(<NavBar />);
    const nav = screen.getByRole('navigation', { name: /Main navigation/i });
    expect(nav).toBeInTheDocument();
  });

  it('renders mobile menu button', () => {
    render(<NavBar />);
    const menuButton = screen.getByRole('button', { name: /Open navigation menu/i });
    expect(menuButton).toBeInTheDocument();
  });
});
