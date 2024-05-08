import React from 'react';
import { render } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import Footer from './footer';

describe('Footer component', () => {
  test('renders footer text correctly', () => {
    const { getByText } = render(<Router><Footer /></Router>);
    const footerText = getByText(/Woman Space é uma plataforma digital que visa dar destaque à arte feminina/i);
    expect(footerText).toBeInTheDocument();
  });

  test('renders footer links correctly', () => {
    const { getByText } = render(<Router><Footer /></Router>);
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

  test('renders social links correctly', () => {
    const { getByTestId } = render(<Router><Footer /></Router>);
    const facebookLink = getByTestId('facebook-link');
    const twitterLink = getByTestId('twitter-link');
    const instagramLink = getByTestId('instagram-link');
    const linkedinLink = getByTestId('linkedin-link');

    expect(facebookLink).toHaveAttribute('href', 'https://facebook.com');
    expect(twitterLink).toHaveAttribute('href', 'https://twitter.com');
    expect(instagramLink).toHaveAttribute('href', 'https://instagram.com');
    expect(linkedinLink).toHaveAttribute('href', 'https://linkedin.com');
  });
});