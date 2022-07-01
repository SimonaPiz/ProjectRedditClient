import React from "react";
import { screen } from '@testing-library/react';

//funzione render personalizzata per includere <Provider> e poter gestire lo stato con redux
import { render } from '../../../util/test-utils';
import '@testing-library/jest-dom';
import userEvent from '@testing-library/user-event';

import NavBar from '../NavBar';

describe('NavBar component', () => {
  test('Logo is an active link to homepage', () => {
    render(<NavBar />);
    //screen.debug();
    const linkHome = screen.getByLabelText('Pagina iniziale');
    expect(linkHome).toBeVisible();
    expect(linkHome).toBeEnabled();
  });

  test('Search input value', () => {
    render(<NavBar />);

    const searchBox = screen.getByPlaceholderText('Cerca su Reddit');
    expect(searchBox).toBeInTheDocument();
    expect(searchBox).toHaveDisplayValue('');

    userEvent.type(searchBox, 'cow');
    expect(searchBox).toHaveValue('cow');
  });

  test('button search', () => {
    render(<NavBar />);

    const buttonSearch = screen.getByRole('button');
    const aSearch = screen.getByText(/Search/);
    expect(buttonSearch).toBeInTheDocument();
    expect(buttonSearch).toBeEnabled();
    expect(buttonSearch).toContainElement(aSearch);

  });
});