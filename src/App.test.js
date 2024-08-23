import { render, screen } from '@testing-library/react';
import App from './App';

test('renders the app header', () => {
  render(<App />);
  const headerElement = screen.getByText(/Destiny Credit Card/i);
  expect(headerElement).toBeInTheDocument();
});
