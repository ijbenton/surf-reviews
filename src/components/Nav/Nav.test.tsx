import { cleanup, render, screen } from '@testing-library/react';
import Nav from './Nav';

import * as nextRouter from 'next/router';

nextRouter.useRouter = jest.fn();
nextRouter.useRouter.mockImplementation(() => ({ route: '/' }));

describe('Nav', () => {
  test('render button element', () => {
    render(<Nav />);
    const buttonElement = screen.getAllByRole('button');
    expect(buttonElement[0]).toBeInTheDocument();
  });
});
