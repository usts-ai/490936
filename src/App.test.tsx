import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('affiche Prestia', () => {
  render(<App />);
  const elements = screen.getAllByText(/Prestia/i);
  expect(elements.length).toBeGreaterThan(0);
});
