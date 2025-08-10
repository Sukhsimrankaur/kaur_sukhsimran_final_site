import React from 'react';
import { render, screen } from '@testing-library/react';
import BasicInfo from '../portfolio/BasicInfo';  // adjust import path if needed

test('renders Sukhsimran Kaur name as heading', () => {
  render(<BasicInfo />);
  const heading = screen.getByRole('heading', { name: /Sukhsimran Kaur/i });
  expect(heading).toBeInTheDocument();
});
