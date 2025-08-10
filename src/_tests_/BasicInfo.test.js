import { render, screen } from '@testing-library/react';
import BasicInfo from '../portfolio/BasicInfo';

test('renders Sukhsimran Kaur name', () => {
  render(<BasicInfo />);
  const nameElement = screen.getByText(/Sukhsimran Kaur/i);
  expect(nameElement).toBeInTheDocument();
});
