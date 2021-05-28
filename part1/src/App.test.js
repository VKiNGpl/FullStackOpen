import { render, screen } from '@testing-library/react';
import App from './App';

test('renders Greetings', () => {
  render(<App />);
  const linkElement = screen.getByText(/greetings/i);
  expect(linkElement).toBeInTheDocument();
});
