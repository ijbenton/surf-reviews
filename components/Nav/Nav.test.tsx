import { render, screen } from '@testing-library/react';
import Nav from './Nav';

describe('Nav', () => {
  test('render button element', () => {
    render(<Nav />);
    const buttonElement = screen.getByRole('button');
    expect(buttonElement).toBeInTheDocument();
  });
});
