import { render, screen } from '@testing-library/react';
import App from './App';

test('renders portfolio app', () => {
  render(<App />);
  const nameElements = screen.getAllByText(/John P. Vajda/i);
  expect(nameElements.length).toBeGreaterThan(0);
});

test('renders projects section', () => {
  render(<App />);
  const projectsHeading = screen.getByRole('heading', { name: /Projects/i });
  expect(projectsHeading).toBeInTheDocument();
});
