import React from 'react';
import { render } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import Navbar from '../JS/Navbar.js';

describe('Navbar component', () => {
  test('renders navbar links correctly', () => {
    const { getByText } = render(<Router><Navbar /></Router>);
    const homeLink = getByText(/Home/i);
    const lojaLink = getByText(/Loja/i);
    const sobreLink = getByText(/Sobre/i);
    const suporteLink = getByText(/Suporte/i);
    const comunidadeLink = getByText(/Comunidade/i);

    expect(homeLink).toHaveAttribute('href', '/');
    expect(lojaLink).toHaveAttribute('href', '/loja');
    expect(sobreLink).toHaveAttribute('href', '/Sobre');
    expect(suporteLink).toHaveAttribute('href', '/Suporte');
    expect(comunidadeLink).toHaveAttribute('href', '/Comunidade');
  });
});
