import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('renders button text', () => {
  const { getByText } = render(<App />);
  const btTextElement = getByText(/Button/i);
  expect(btTextElement).toBeInTheDocument();
});
