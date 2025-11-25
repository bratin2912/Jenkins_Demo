import { render, screen } from '@testing-library/react';
import HelloWorld from './HelloWorld';

test('renders hello world heading', () => {
  render(<HelloWorld />);
  const headingElement = screen.getByText(/hello world/i);
  expect(headingElement).toBeInTheDocument();
});
