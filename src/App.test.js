import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import App from './App';

describe('App', () => {
  it('renders portfolio app with main sections', () => {
    render(<App />);
    
    // Check main sections are present
    expect(screen.getByRole('banner')).toBeInTheDocument(); // NavBar
    expect(screen.getByRole('main')).toBeInTheDocument();
    expect(screen.getByRole('contentinfo')).toBeInTheDocument(); // Footer
  });

  it('renders hero section', () => {
    render(<App />);
    expect(screen.getByText('John P. Vajda')).toBeInTheDocument();
  });

  it('renders competencies section', () => {
    render(<App />);
    expect(screen.getByRole('region', { name: /competencies/i })).toBeInTheDocument();
  });

  it('renders skills section', () => {
    render(<App />);
    expect(screen.getByRole('region', { name: /skills/i })).toBeInTheDocument();
  });

  it('renders certifications section', () => {
    render(<App />);
    expect(screen.getByRole('region', { name: /certifications/i })).toBeInTheDocument();
  });

  it('has skip to main content link', () => {
    render(<App />);
    const skipLink = screen.getByRole('link', { name: /Skip to main content/i });
    expect(skipLink).toBeInTheDocument();
    expect(skipLink).toHaveAttribute('href', '#main-content');
  });
});
