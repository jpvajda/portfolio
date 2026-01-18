import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import Footer from './Footer';

describe('Footer', () => {
  it('renders footer with social links', () => {
    render(<Footer />);
    expect(screen.getByRole('link', { name: /Visit Github/i })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /Visit Linkedin/i })).toBeInTheDocument();
  });


  it('renders copyright text', () => {
    render(<Footer />);
    expect(screen.getByText(/John P. Vajda 2026-27/)).toBeInTheDocument();
  });

  it('has proper aria-label for footer', () => {
    render(<Footer />);
    const footer = screen.getByRole('contentinfo', { name: /Site footer/i });
    expect(footer).toBeInTheDocument();
  });

  it('opens social links in new tab', () => {
    render(<Footer />);
    const githubLink = screen.getByRole('link', { name: /Visit Github/i });
    expect(githubLink).toHaveAttribute('target', '_blank');
    expect(githubLink).toHaveAttribute('rel', 'noopener noreferrer');
  });
});
