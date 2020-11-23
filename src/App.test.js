import { render, screen } from '@testing-library/react';
import App from './App';

test('rbg should be correct', () => {
  const { container } = render(<App />);
  expect(container).toMatchSnapshot();
});