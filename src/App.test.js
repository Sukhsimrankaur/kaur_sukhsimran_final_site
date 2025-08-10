import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App'; // Corrected path

test('renders navigation button Basic Info', () => {
  render(<App />);
  const basicInfoButton = screen.getByRole('button', { name: /Basic Info/i });
  expect(basicInfoButton).toBeInTheDocument();
});
